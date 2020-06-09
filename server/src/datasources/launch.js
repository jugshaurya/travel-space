const { RESTDataSource } = require("apollo-datasource-rest");

class LaunchAPI extends RESTDataSource {
  baseURL = "https://api.spacexdata.com/v2/";

  _launchReducer(launch) {
    return {
      id: launch.flight_number || 0,
      cursor: `${launch.launch_date_unix}`,
      site: launch.launch_site && launch.launch_site.name,
      mission: {
        name: launch.mission_name,
        missionPatchSmall: launch.links.mission_patch_small,
        missionPatchLarge: launch.links.mission_patch,
      },
      rocket: {
        id: launch.rocket.rocket_id,
        name: launch.rocket.rocket_name,
        type: launch.rocket.rocket_type,
      },
    };
  }

  getAllLaunches = async () => {
    const launches = await this.get("launches");
    return Array.isArray(launches)
      ? launches.map((launch) => this._launchReducer(launch))
      : [];
  };

  getLaunchById = async ({ launchId }) => {
    const launch = await this.get("launches", { flight_number: launchId });
    return this._launchReducer(launch[0]);
  };

  getLaunchesByIds = async ({ launchIds }) => {
    return Promise.all(
      launchIds.map((launchId) => this.getLaunchById({ launchId }))
    );
  };
}

module.exports = LaunchAPI;

const os = require("os");

const getOSDetails = () => {
  return {
    name: os.type(),
    architecture: os.arch(),
    free_memory: os.freemem(),
    platform: os.platform(),
    host_name: os.hostname(),
    available_memory: os.totalmem(),
    release: os.release(),
    uptime: os.uptime(),
    user_detail: os.userInfo(),
    network_details: os.networkInterfaces(),
  };
};

exports.getOSDetails = getOSDetails;

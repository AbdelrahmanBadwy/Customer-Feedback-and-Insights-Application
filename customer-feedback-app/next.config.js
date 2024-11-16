module.exports = {
  async rewrites() {
    return [
      {
        source: "/feedback",
        destination: "/feedback", // Route for feedback submission page
      },
      {
        source: "/insights",
        destination: "/insights", // Route for insights dashboard page
      },
    ];
  },
};
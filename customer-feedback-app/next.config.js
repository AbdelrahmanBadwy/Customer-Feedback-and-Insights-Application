module.exports = {
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/feedback", // Route for feedback submission page
      },
    ];
  },
};

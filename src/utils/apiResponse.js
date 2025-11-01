class apiResponse {
  constructor(status, message, data) {
    this.status = status >= 200 && status < 300 ? "OK" : "Status Error";
    this.statusCode = status || 500;
    this.message = message || "Succes";
    this.data = data;
  }
  static sendSuccess(res, status, message, data) {
    return res.status(status).json(new apiResponse(status, message, data));
  }
}

module.exports = { apiResponse };

class CustomHttpError extends Error {
    payload: any;
    responseCode: any;
    statusCode: any;
    statusText: any;
    responseText: any;
    constructor(message, extras) {
      super(message);
      this.name = 'CustomHttpError';
      this.payload = extras.payload;
      this.responseCode = extras.responseCode;
      this.statusCode = extras.statusCode;
      this.statusText = extras.statusText;
      this.responseText = extras.responseText;
    }
  }
  
  export default CustomHttpError;
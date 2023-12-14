var settings = {
  "url": "https://6zxzcl5ail.execute-api.us-east-1.amazonaws.com/itc/neufilestorage/testing1.pdf",
  "method": "PUT",
  "timeout": 0,
  "headers": {
    "Content-Type": "application/pdf"
  },
   "data": "<file contents here>"
};

$.ajax(settings).done(function (response) {
  console.log(response);
});
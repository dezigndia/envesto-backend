define({ "api": [
  {
    "type": "POST",
    "url": "/api/feed",
    "title": "add feed content",
    "name": "Admin-Add-Settings-POST",
    "group": "Feed",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "error",
            "description": "<p>for checking the error.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>for information.</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "data",
            "description": "<p>for payload.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": true,\n  \"error\": false,\n  \"message\": \"Feed content saved successfully !!\"\n  \"data\": object\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Sample-Request:",
        "content": "{\n      \"title\": \"title\",\n      \"subTitle\":\"subTitle\",\n      \"description\": \"description\",\n      \"category\": \"category\",\n      \"subCategory\":\"subCategory\",\n      \"monetizationModeType\": \"free\"/\"paid\"/\"premium\",\n       \"curriculum\":[\n           \"title\": \"title\",\n           \"description\": \"description\",\n            \"video\": \"video\",\n            \"thumbnailImage\": \"thumbnailImage\"\n            ],\n        \"type\":\"course\"/\"content\",\n      \"monetization\": [\n         {\n              \"allowAudienceSupport\": true/false,\n              \"paid\": {\n                   \"price\": \"price\",\n                  \"allowReshare\": true/false,\n                  \"premium\": [\n                      \"premium1\",\n                      \"premium2\",\n                      \"premium3\"\n                  ]\n              },\n              \"premium\": [\n                      \"premium1\",\n                      \"premium2\",\n                      \"premium3\"\n                  ]\n          }\n      ],\n      \"tag\": [\"tag-1\",\"tag-2\"],\n      \"thumbnailImage\": \"thumbnailImage\",\n      \"image\": [\"image-1\",\"image-2\"],\n      \"video\": \"video\"\n }",
        "type": "json"
      }
    ],
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 unauthorized request\n{\n   \"status\": false\n   \"error\": true,\n   \"message\": \"Something went wrong\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/api/feed.route.ts",
    "groupTitle": "Feed"
  },
  {
    "type": "GET",
    "url": "/api/feed",
    "title": "get feed",
    "name": "Feed-Get-feed-GET",
    "group": "Feed",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "error",
            "description": "<p>for checking the error.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>for information.</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "data",
            "description": "<p>for payload.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": true,\n  \"error\": false,\n  \"message\": \"All Feed contents fetched successfully !!\",\n  \"data\": object\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 unauthorized request\n{\n   \"status\": false\n   \"error\": true,\n   \"message\": \"Something went wrong\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/api/feed.route.ts",
    "groupTitle": "Feed"
  },
  {
    "type": "UPDATE",
    "url": "/api/Feed/status",
    "title": "update feed",
    "name": "Feed-Update-feed-Status-UPDATE",
    "group": "Feed",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "error",
            "description": "<p>for checking the error.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>for information.</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "data",
            "description": "<p>for JSON.</p> <p>{ &quot;feedId&quot;:&quot;feedId&quot;, &quot;status&quot;: &quot;title&quot; }</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": true,\n  \"error\": false,\n  \"message\": \"Feed Status updated successfully !!\",\n  \"data\": object\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 unauthorized request\n{\n   \"status\": false\n   \"error\": true,\n   \"message\": \"Something went wrong\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/api/feed.route.ts",
    "groupTitle": "Feed"
  },
  {
    "type": "POST",
    "url": "/api/auth/login",
    "title": "login-with-phoneOtp",
    "name": "auth-login-with-phoneOtp-POST",
    "group": "auth",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "error",
            "description": "<p>for checking the error.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>for information.</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "data",
            "description": "<p>for payload.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": true,\n  \"error\": false,\n  \"message\": \"sent otp successfully!!\"\n  \"data\": object\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Sample-Request:",
        "content": "{\n \"phone\": \"phone\",\n}",
        "type": "json"
      }
    ],
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 unauthorized request\n{\n   \"status\": false\n   \"error\": true,\n   \"message\": \"Something went wrong\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/api/auth.route.ts",
    "groupTitle": "auth"
  },
  {
    "type": "POST",
    "url": "/api/auth/verify-otp",
    "title": "login-with-phone-verify-otp",
    "name": "auth-login-with-phoneVerify-otp-POST",
    "group": "auth",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "error",
            "description": "<p>for checking the error.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>for information.</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "data",
            "description": "<p>for payload.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": true,\n  \"error\": false,\n  \"message\": \"You are successfully logged in !!\"\n  \"data\": object\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Sample-Request:",
        "content": "{\n \"otp\": \"otp\",\n\"token\":\"token\"\n}",
        "type": "json"
      }
    ],
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 unauthorized request\n{\n   \"status\": false\n   \"error\": true,\n   \"message\": \"Something went wrong\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/api/auth.route.ts",
    "groupTitle": "auth"
  },
  {
    "type": "POST",
    "url": "/api/auth/sign-in",
    "title": "sign-in",
    "name": "auth-sign-in-POST",
    "group": "auth",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "error",
            "description": "<p>for checking the error.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>for information.</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "data",
            "description": "<p>for payload.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": true,\n  \"error\": false,\n  \"message\": \"Sign-in successfully !!\"\n  \"data\": object\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Sample-Request:",
        "content": "{\n \"email\": \"email\",\n \"password\":\"password\"\n}",
        "type": "json"
      }
    ],
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 unauthorized request\n{\n   \"status\": false\n   \"error\": true,\n   \"message\": \"Something went wrong\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/api/auth.route.ts",
    "groupTitle": "auth"
  },
  {
    "type": "POST",
    "url": "/api/auth/sign-up",
    "title": "sign-up",
    "name": "auth-sign-up-POST",
    "group": "auth",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "error",
            "description": "<p>for checking the error.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>for information.</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "data",
            "description": "<p>for payload.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": true,\n  \"error\": false,\n  \"message\": \"Sign-up successfully !!\"\n  \"data\": object\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Sample-Request:",
        "content": "{\n \"name\":\"full name\",\n \"email\": \"email\",\n \"phone\": \"phone\",\n \"password\":\"password\",\n \"dob\":\"dob\",\n \"country\":\"country\"\n}",
        "type": "json"
      }
    ],
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 unauthorized request\n{\n   \"status\": false\n   \"error\": true,\n   \"message\": \"Something went wrong\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/api/auth.route.ts",
    "groupTitle": "auth"
  }
] });

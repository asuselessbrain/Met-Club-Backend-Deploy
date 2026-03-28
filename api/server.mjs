var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// src/utils/catchAsync.ts
var catchAsync;
var init_catchAsync = __esm({
  "src/utils/catchAsync.ts"() {
    "use strict";
    catchAsync = (fn) => {
      return async (req, res, next) => {
        try {
          await fn(req, res, next);
        } catch (err) {
          next(err);
        }
      };
    };
  }
});

// src/utils/responser.ts
var sendResponse, responser_default;
var init_responser = __esm({
  "src/utils/responser.ts"() {
    "use strict";
    sendResponse = (res, json) => {
      res.status(json?.statusCode).json({
        success: true,
        message: json?.message,
        meta: json?.meta,
        data: json?.data
      });
    };
    responser_default = sendResponse;
  }
});

// generated/prisma/internal/class.ts
import * as runtime from "@prisma/client/runtime/client";
async function decodeBase64AsWasm(wasmBase64) {
  const { Buffer: Buffer2 } = await import("buffer");
  const wasmArray = Buffer2.from(wasmBase64, "base64");
  return new WebAssembly.Module(wasmArray);
}
function getPrismaClientClass() {
  return runtime.getPrismaClient(config);
}
var config;
var init_class = __esm({
  "generated/prisma/internal/class.ts"() {
    "use strict";
    config = {
      "previewFeatures": [],
      "clientVersion": "7.6.0",
      "engineVersion": "75cbdc1eb7150937890ad5465d861175c6624711",
      "activeProvider": "postgresql",
      "inlineSchema": 'generator client {\n  provider = "prisma-client"\n  output   = "../generated/prisma"\n}\n\ndatasource db {\n  provider = "postgresql"\n}\n\nmodel User {\n  id String @id @default(uuid())\n\n  fullName  String\n  studentId String @unique\n\n  email String @unique\n\n  institution String\n  class       Int\n\n  guardianPhone String\n\n  district String?\n\n  password String\n\n  profileImg String?\n\n  role Role @default(student)\n\n  status Status @default(active)\n\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n}\n\nenum Role {\n  student\n  admin\n}\n\nenum Status {\n  active\n  blocked\n}\n\nenum QuizLevel {\n  easy\n  medium\n  hard\n}\n',
      "runtimeDataModel": {
        "models": {},
        "enums": {},
        "types": {}
      },
      "parameterizationSchema": {
        "strings": [],
        "graph": ""
      }
    };
    config.runtimeDataModel = JSON.parse('{"models":{"User":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"fullName","kind":"scalar","type":"String"},{"name":"studentId","kind":"scalar","type":"String"},{"name":"email","kind":"scalar","type":"String"},{"name":"institution","kind":"scalar","type":"String"},{"name":"class","kind":"scalar","type":"Int"},{"name":"guardianPhone","kind":"scalar","type":"String"},{"name":"district","kind":"scalar","type":"String"},{"name":"password","kind":"scalar","type":"String"},{"name":"profileImg","kind":"scalar","type":"String"},{"name":"role","kind":"enum","type":"Role"},{"name":"status","kind":"enum","type":"Status"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"}],"dbName":null}},"enums":{},"types":{}}');
    config.parameterizationSchema = {
      strings: JSON.parse('["where","User.findUnique","User.findUniqueOrThrow","orderBy","cursor","User.findFirst","User.findFirstOrThrow","User.findMany","data","User.createOne","User.createMany","User.createManyAndReturn","User.updateOne","User.updateMany","User.updateManyAndReturn","create","update","User.upsertOne","User.deleteOne","User.deleteMany","having","_count","_avg","_sum","_min","_max","User.groupBy","User.aggregate","AND","OR","NOT","id","fullName","studentId","email","institution","class","guardianPhone","district","password","profileImg","Role","role","Status","status","createdAt","updatedAt","equals","in","notIn","lt","lte","gt","gte","not","contains","startsWith","endsWith","set","increment","decrement","multiply","divide"]'),
      graph: "QQsQERwAAC8AMB0AAAQAEB4AAC8AMB8BAAAAASABADAAISEBAAAAASIBAAAAASMBADAAISQCADEAISUBADAAISYBADIAIScBADAAISgBADIAISoAADMqIiwAADQsIi1AADUAIS5AADUAIQEAAAABACABAAAAAQAgERwAAC8AMB0AAAQAEB4AAC8AMB8BADAAISABADAAISEBADAAISIBADAAISMBADAAISQCADEAISUBADAAISYBADIAIScBADAAISgBADIAISoAADMqIiwAADQsIi1AADUAIS5AADUAIQImAAA2ACAoAAA2ACADAAAABAAgAwAABQAwBAAAAQAgAwAAAAQAIAMAAAUAMAQAAAEAIAMAAAAEACADAAAFADAEAAABACAOHwEAAAABIAEAAAABIQEAAAABIgEAAAABIwEAAAABJAIAAAABJQEAAAABJgEAAAABJwEAAAABKAEAAAABKgAAACoCLAAAACwCLUAAAAABLkAAAAABAQgAAAkAIA4fAQAAAAEgAQAAAAEhAQAAAAEiAQAAAAEjAQAAAAEkAgAAAAElAQAAAAEmAQAAAAEnAQAAAAEoAQAAAAEqAAAAKgIsAAAALAItQAAAAAEuQAAAAAEBCAAACwAwAQgAAAsAMA4fAQA8ACEgAQA8ACEhAQA8ACEiAQA8ACEjAQA8ACEkAgA9ACElAQA8ACEmAQA-ACEnAQA8ACEoAQA-ACEqAAA_KiIsAABALCItQABBACEuQABBACECAAAAAQAgCAAADgAgDh8BADwAISABADwAISEBADwAISIBADwAISMBADwAISQCAD0AISUBADwAISYBAD4AIScBADwAISgBAD4AISoAAD8qIiwAAEAsIi1AAEEAIS5AAEEAIQIAAAAEACAIAAAQACACAAAABAAgCAAAEAAgAwAAAAEAIA8AAAkAIBAAAA4AIAEAAAABACABAAAABAAgBxUAADcAIBYAADgAIBcAADsAIBgAADoAIBkAADkAICYAADYAICgAADYAIBEcAAAaADAdAAAXABAeAAAaADAfAQAbACEgAQAbACEhAQAbACEiAQAbACEjAQAbACEkAgAcACElAQAbACEmAQAdACEnAQAbACEoAQAdACEqAAAeKiIsAAAfLCItQAAgACEuQAAgACEDAAAABAAgAwAAFgAwFAAAFwAgAwAAAAQAIAMAAAUAMAQAAAEAIBEcAAAaADAdAAAXABAeAAAaADAfAQAbACEgAQAbACEhAQAbACEiAQAbACEjAQAbACEkAgAcACElAQAbACEmAQAdACEnAQAbACEoAQAdACEqAAAeKiIsAAAfLCItQAAgACEuQAAgACEOFQAAIgAgGAAALgAgGQAALgAgLwEAAAABMAEAAAAEMQEAAAAEMgEAAAABMwEAAAABNAEAAAABNQEAAAABNgEALQAhNwEAAAABOAEAAAABOQEAAAABDRUAACIAIBYAACwAIBcAACIAIBgAACIAIBkAACIAIC8CAAAAATACAAAABDECAAAABDICAAAAATMCAAAAATQCAAAAATUCAAAAATYCACsAIQ4VAAApACAYAAAqACAZAAAqACAvAQAAAAEwAQAAAAUxAQAAAAUyAQAAAAEzAQAAAAE0AQAAAAE1AQAAAAE2AQAoACE3AQAAAAE4AQAAAAE5AQAAAAEHFQAAIgAgGAAAJwAgGQAAJwAgLwAAACoCMAAAACoIMQAAACoINgAAJioiBxUAACIAIBgAACUAIBkAACUAIC8AAAAsAjAAAAAsCDEAAAAsCDYAACQsIgsVAAAiACAYAAAjACAZAAAjACAvQAAAAAEwQAAAAAQxQAAAAAQyQAAAAAEzQAAAAAE0QAAAAAE1QAAAAAE2QAAhACELFQAAIgAgGAAAIwAgGQAAIwAgL0AAAAABMEAAAAAEMUAAAAAEMkAAAAABM0AAAAABNEAAAAABNUAAAAABNkAAIQAhCC8CAAAAATACAAAABDECAAAABDICAAAAATMCAAAAATQCAAAAATUCAAAAATYCACIAIQgvQAAAAAEwQAAAAAQxQAAAAAQyQAAAAAEzQAAAAAE0QAAAAAE1QAAAAAE2QAAjACEHFQAAIgAgGAAAJQAgGQAAJQAgLwAAACwCMAAAACwIMQAAACwINgAAJCwiBC8AAAAsAjAAAAAsCDEAAAAsCDYAACUsIgcVAAAiACAYAAAnACAZAAAnACAvAAAAKgIwAAAAKggxAAAAKgg2AAAmKiIELwAAACoCMAAAACoIMQAAACoINgAAJyoiDhUAACkAIBgAACoAIBkAACoAIC8BAAAAATABAAAABTEBAAAABTIBAAAAATMBAAAAATQBAAAAATUBAAAAATYBACgAITcBAAAAATgBAAAAATkBAAAAAQgvAgAAAAEwAgAAAAUxAgAAAAUyAgAAAAEzAgAAAAE0AgAAAAE1AgAAAAE2AgApACELLwEAAAABMAEAAAAFMQEAAAAFMgEAAAABMwEAAAABNAEAAAABNQEAAAABNgEAKgAhNwEAAAABOAEAAAABOQEAAAABDRUAACIAIBYAACwAIBcAACIAIBgAACIAIBkAACIAIC8CAAAAATACAAAABDECAAAABDICAAAAATMCAAAAATQCAAAAATUCAAAAATYCACsAIQgvCAAAAAEwCAAAAAQxCAAAAAQyCAAAAAEzCAAAAAE0CAAAAAE1CAAAAAE2CAAsACEOFQAAIgAgGAAALgAgGQAALgAgLwEAAAABMAEAAAAEMQEAAAAEMgEAAAABMwEAAAABNAEAAAABNQEAAAABNgEALQAhNwEAAAABOAEAAAABOQEAAAABCy8BAAAAATABAAAABDEBAAAABDIBAAAAATMBAAAAATQBAAAAATUBAAAAATYBAC4AITcBAAAAATgBAAAAATkBAAAAAREcAAAvADAdAAAEABAeAAAvADAfAQAwACEgAQAwACEhAQAwACEiAQAwACEjAQAwACEkAgAxACElAQAwACEmAQAyACEnAQAwACEoAQAyACEqAAAzKiIsAAA0LCItQAA1ACEuQAA1ACELLwEAAAABMAEAAAAEMQEAAAAEMgEAAAABMwEAAAABNAEAAAABNQEAAAABNgEALgAhNwEAAAABOAEAAAABOQEAAAABCC8CAAAAATACAAAABDECAAAABDICAAAAATMCAAAAATQCAAAAATUCAAAAATYCACIAIQsvAQAAAAEwAQAAAAUxAQAAAAUyAQAAAAEzAQAAAAE0AQAAAAE1AQAAAAE2AQAqACE3AQAAAAE4AQAAAAE5AQAAAAEELwAAACoCMAAAACoIMQAAACoINgAAJyoiBC8AAAAsAjAAAAAsCDEAAAAsCDYAACUsIggvQAAAAAEwQAAAAAQxQAAAAAQyQAAAAAEzQAAAAAE0QAAAAAE1QAAAAAE2QAAjACEAAAAAAAABOgEAAAABBToCAAAAATsCAAAAATwCAAAAAT0CAAAAAT4CAAAAAQE6AQAAAAEBOgAAACoCAToAAAAsAgE6QAAAAAEAAAAABRUABhYABxcACBgACRkACgAAAAAABRUABhYABxcACBgACRkACgECAQIDAQUGAQYHAQcIAQkKAQoMAgsNAwwPAQ0RAg4SBBETARIUARMVAhoYBRsZCw"
    };
    config.compilerWasm = {
      getRuntime: async () => await import("@prisma/client/runtime/query_compiler_fast_bg.postgresql.mjs"),
      getQueryCompilerWasmModule: async () => {
        const { wasm } = await import("@prisma/client/runtime/query_compiler_fast_bg.postgresql.wasm-base64.mjs");
        return await decodeBase64AsWasm(wasm);
      },
      importName: "./query_compiler_fast_bg.js"
    };
  }
});

// generated/prisma/internal/prismaNamespace.ts
var prismaNamespace_exports = {};
__export(prismaNamespace_exports, {
  AnyNull: () => AnyNull2,
  DbNull: () => DbNull2,
  Decimal: () => Decimal2,
  JsonNull: () => JsonNull2,
  ModelName: () => ModelName,
  NullTypes: () => NullTypes2,
  NullsOrder: () => NullsOrder,
  PrismaClientInitializationError: () => PrismaClientInitializationError2,
  PrismaClientKnownRequestError: () => PrismaClientKnownRequestError2,
  PrismaClientRustPanicError: () => PrismaClientRustPanicError2,
  PrismaClientUnknownRequestError: () => PrismaClientUnknownRequestError2,
  PrismaClientValidationError: () => PrismaClientValidationError2,
  QueryMode: () => QueryMode,
  SortOrder: () => SortOrder,
  Sql: () => Sql2,
  TransactionIsolationLevel: () => TransactionIsolationLevel,
  UserScalarFieldEnum: () => UserScalarFieldEnum,
  defineExtension: () => defineExtension,
  empty: () => empty2,
  getExtensionContext: () => getExtensionContext,
  join: () => join2,
  prismaVersion: () => prismaVersion,
  raw: () => raw2,
  sql: () => sql
});
import * as runtime2 from "@prisma/client/runtime/client";
var PrismaClientKnownRequestError2, PrismaClientUnknownRequestError2, PrismaClientRustPanicError2, PrismaClientInitializationError2, PrismaClientValidationError2, sql, empty2, join2, raw2, Sql2, Decimal2, getExtensionContext, prismaVersion, NullTypes2, DbNull2, JsonNull2, AnyNull2, ModelName, TransactionIsolationLevel, UserScalarFieldEnum, SortOrder, QueryMode, NullsOrder, defineExtension;
var init_prismaNamespace = __esm({
  "generated/prisma/internal/prismaNamespace.ts"() {
    "use strict";
    PrismaClientKnownRequestError2 = runtime2.PrismaClientKnownRequestError;
    PrismaClientUnknownRequestError2 = runtime2.PrismaClientUnknownRequestError;
    PrismaClientRustPanicError2 = runtime2.PrismaClientRustPanicError;
    PrismaClientInitializationError2 = runtime2.PrismaClientInitializationError;
    PrismaClientValidationError2 = runtime2.PrismaClientValidationError;
    sql = runtime2.sqltag;
    empty2 = runtime2.empty;
    join2 = runtime2.join;
    raw2 = runtime2.raw;
    Sql2 = runtime2.Sql;
    Decimal2 = runtime2.Decimal;
    getExtensionContext = runtime2.Extensions.getExtensionContext;
    prismaVersion = {
      client: "7.6.0",
      engine: "75cbdc1eb7150937890ad5465d861175c6624711"
    };
    NullTypes2 = {
      DbNull: runtime2.NullTypes.DbNull,
      JsonNull: runtime2.NullTypes.JsonNull,
      AnyNull: runtime2.NullTypes.AnyNull
    };
    DbNull2 = runtime2.DbNull;
    JsonNull2 = runtime2.JsonNull;
    AnyNull2 = runtime2.AnyNull;
    ModelName = {
      User: "User"
    };
    TransactionIsolationLevel = runtime2.makeStrictEnum({
      ReadUncommitted: "ReadUncommitted",
      ReadCommitted: "ReadCommitted",
      RepeatableRead: "RepeatableRead",
      Serializable: "Serializable"
    });
    UserScalarFieldEnum = {
      id: "id",
      fullName: "fullName",
      studentId: "studentId",
      email: "email",
      institution: "institution",
      class: "class",
      guardianPhone: "guardianPhone",
      district: "district",
      password: "password",
      profileImg: "profileImg",
      role: "role",
      status: "status",
      createdAt: "createdAt",
      updatedAt: "updatedAt"
    };
    SortOrder = {
      asc: "asc",
      desc: "desc"
    };
    QueryMode = {
      default: "default",
      insensitive: "insensitive"
    };
    NullsOrder = {
      first: "first",
      last: "last"
    };
    defineExtension = runtime2.Extensions.defineExtension;
  }
});

// generated/prisma/enums.ts
var Role, Status;
var init_enums = __esm({
  "generated/prisma/enums.ts"() {
    "use strict";
    Role = {
      student: "student",
      admin: "admin"
    };
    Status = {
      active: "active",
      blocked: "blocked"
    };
  }
});

// generated/prisma/client.ts
import * as path from "path";
import { fileURLToPath } from "url";
var PrismaClient;
var init_client = __esm({
  "generated/prisma/client.ts"() {
    "use strict";
    init_class();
    init_prismaNamespace();
    init_enums();
    init_enums();
    globalThis["__dirname"] = path.dirname(fileURLToPath(import.meta.url));
    PrismaClient = getPrismaClientClass();
  }
});

// src/config/index.ts
import dotenv from "dotenv";
import path2 from "path";
var config2;
var init_config = __esm({
  "src/config/index.ts"() {
    "use strict";
    dotenv.config({ path: path2.join(process.cwd(), ".env") });
    config2 = {
      node_env: process.env.NODE_ENV || "development",
      port: process.env.PORT || 5e3,
      salt_rounds: process.env.SALT_ROUNDS,
      email: process.env.EMAIL,
      email_password: process.env.EMAIL_PASSWORD,
      email_host: process.env.EMAIL_HOST,
      email_port: process.env.EMAIL_PORT,
      jwt: {
        token_secret: process.env.TOKEN_SECRET,
        token_expires_in: process.env.TOKEN_EXPIRES_IN,
        refresh_token_secret: process.env.REFRESH_TOKEN_SECRET,
        refresh_token_expires_in: process.env.REFRESH_TOKEN_EXPIRES_IN,
        email_verification_token: process.env.EMAIL_VERIFICATION_TOKEN,
        email_verification_token_expires_in: process.env.EMAIL_VERIFICATION_TOKEN_EXPIRES_IN
      }
    };
  }
});

// src/lib/prisma.ts
import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
var connectionString, adapter, prisma;
var init_prisma = __esm({
  "src/lib/prisma.ts"() {
    "use strict";
    init_client();
    connectionString = `${process.env.DATABASE_URL}`;
    adapter = new PrismaPg({ connectionString });
    prisma = new PrismaClient({ adapter });
  }
});

// src/app/modules/user/user.service.ts
import bcrypt from "bcrypt";
var generateStudentId, createUser, UserService;
var init_user_service = __esm({
  "src/app/modules/user/user.service.ts"() {
    "use strict";
    init_client();
    init_config();
    init_prisma();
    generateStudentId = async () => {
      const lastUser = await prisma.user.findFirst({
        orderBy: {
          createdAt: "desc"
        },
        select: {
          studentId: true
        }
      });
      let nextNumber = 1;
      if (lastUser?.studentId) {
        const lastNumber = parseInt(lastUser.studentId.split("-").pop() || "0");
        nextNumber = lastNumber + 1;
      }
      return `Met-Club-${nextNumber}`;
    };
    createUser = async (payload) => {
      const hashedPassword = await bcrypt.hash(payload.password, Number(config2.salt_rounds));
      const userData = {
        ...payload,
        studentId: await generateStudentId(),
        password: hashedPassword,
        role: Role.student
      };
      const result = await prisma.$transaction(async (transaction) => {
        const createUser3 = await transaction.user.create({
          data: userData
        });
        return createUser3;
      });
      return result;
    };
    UserService = {
      createUser
    };
  }
});

// src/app/modules/user/user.controller.ts
var createUser2, userController;
var init_user_controller = __esm({
  "src/app/modules/user/user.controller.ts"() {
    "use strict";
    init_catchAsync();
    init_responser();
    init_user_service();
    createUser2 = catchAsync(async (req, res) => {
      const result = await UserService.createUser(req.body);
      responser_default(res, {
        statusCode: 201,
        message: "User created successfully!",
        data: result
      });
    });
    userController = {
      createUser: createUser2
    };
  }
});

// src/app/modules/user/user.route.ts
import express from "express";
var router, UserRoutes;
var init_user_route = __esm({
  "src/app/modules/user/user.route.ts"() {
    "use strict";
    init_user_controller();
    router = express.Router();
    router.post(
      "/",
      userController.createUser
    );
    UserRoutes = router;
  }
});

// src/app/errors/appErrors.ts
var AppError, appErrors_default;
var init_appErrors = __esm({
  "src/app/errors/appErrors.ts"() {
    "use strict";
    AppError = class extends Error {
      statusCode;
      constructor(statusCode, message, stack) {
        super(message);
        this.statusCode = statusCode;
        if (stack) {
          this.stack = stack;
        } else {
          Error.captureStackTrace(this, this.constructor);
        }
      }
    };
    appErrors_default = AppError;
  }
});

// src/utils/jwt.ts
import jwt from "jsonwebtoken";
var jwtGenerator;
var init_jwt = __esm({
  "src/utils/jwt.ts"() {
    "use strict";
    jwtGenerator = ({ userInfo, createSecretKey, expiresIn }) => {
      const token = jwt.sign({ email: userInfo.email, role: userInfo.role }, createSecretKey, { expiresIn });
      return token;
    };
  }
});

// src/app/modules/auth/auth.service.ts
import bcrypt2 from "bcrypt";
var loginUser, logout, AuthService;
var init_auth_service = __esm({
  "src/app/modules/auth/auth.service.ts"() {
    "use strict";
    init_config();
    init_prisma();
    init_appErrors();
    init_enums();
    init_jwt();
    loginUser = async (payload) => {
      const isUserExist = await prisma.user.findUnique({
        where: {
          email: payload.email,
          status: Status.active
        }
      });
      if (!isUserExist) {
        throw new appErrors_default(404, "User not found!");
      }
      const isPasswordMarched = await bcrypt2.compare(payload.password, isUserExist.password);
      if (!isPasswordMarched) {
        throw new Error("Email or password does not matched!");
      }
      const accessToken = await jwtGenerator({
        userInfo: { email: isUserExist.email, role: isUserExist.role },
        createSecretKey: config2.jwt.token_secret,
        expiresIn: config2.jwt.token_expires_in
      });
      return {
        accessToken
      };
    };
    logout = async () => {
      return null;
    };
    AuthService = {
      loginUser,
      logout
    };
  }
});

// src/app/modules/auth/auth.controller.ts
var login, logout2, AuthController;
var init_auth_controller = __esm({
  "src/app/modules/auth/auth.controller.ts"() {
    "use strict";
    init_auth_service();
    init_catchAsync();
    init_responser();
    login = catchAsync(async (req, res) => {
      const { email, password } = req.body;
      const result = await AuthService.loginUser({ email, password });
      res.cookie("token", result.accessToken, { secure: false, httpOnly: true });
      responser_default(res, {
        statusCode: 200,
        message: "User logged in successfully!",
        data: result.accessToken
      });
    });
    logout2 = catchAsync(async (req, res) => {
      const result = await AuthService.logout();
      res.clearCookie("token", { secure: false, httpOnly: true });
      responser_default(res, {
        statusCode: 200,
        message: "Logout successfully!",
        data: result
      });
    });
    AuthController = {
      login,
      logout: logout2
    };
  }
});

// src/app/modules/auth/auth.route.ts
import express2 from "express";
var router2, AuthRoutes;
var init_auth_route = __esm({
  "src/app/modules/auth/auth.route.ts"() {
    "use strict";
    init_auth_controller();
    router2 = express2.Router();
    router2.post("/login", AuthController.login);
    router2.get("/logout", AuthController.logout);
    AuthRoutes = router2;
  }
});

// src/app/routes/routes.ts
import express3 from "express";
var router3, routes, routes_default;
var init_routes = __esm({
  "src/app/routes/routes.ts"() {
    "use strict";
    init_user_route();
    init_auth_route();
    router3 = express3.Router();
    routes = [
      {
        path: "/user",
        route: UserRoutes
      },
      {
        path: "/auth",
        route: AuthRoutes
      }
    ];
    routes.forEach((route) => router3.use(route.path, route.route));
    routes_default = router3;
  }
});

// src/app/errors/globalErrorHandler.ts
import jwt2 from "jsonwebtoken";
var JsonWebTokenError, TokenExpiredError, globalErrorHandler;
var init_globalErrorHandler = __esm({
  "src/app/errors/globalErrorHandler.ts"() {
    "use strict";
    init_client();
    ({ JsonWebTokenError, TokenExpiredError } = jwt2);
    globalErrorHandler = (error, req, res, next) => {
      let statusCode = 500;
      let message = "Something went wrong!";
      let errorMessage = error.message;
      if (error instanceof prismaNamespace_exports.PrismaClientKnownRequestError) {
        if (error.code === "P2002") {
          statusCode = 409;
          message = "Duplicate Entry";
          errorMessage = `Duplicate entry found.`;
        } else if (error.code === "P2025") {
          statusCode = 404;
          message = "Record not found";
        }
      } else if (error instanceof prismaNamespace_exports.PrismaClientValidationError) {
        statusCode = 400;
        message = "Validation Error";
      } else if (error instanceof TokenExpiredError) {
        statusCode = 401;
        message = "Unauthorized";
        errorMessage = "Access token expired. Please log in again.";
      } else if (error instanceof JsonWebTokenError) {
        statusCode = 401;
        message = "Unauthorized";
        errorMessage = "Invalid token provided.";
      } else if (error.statusCode) {
        statusCode = error.statusCode;
        message = error.message;
        errorMessage = error.message;
      }
      console.log("\u{1F6A8} Error Handler Caught:", error.statusCode, error.message);
      res.status(statusCode).json({
        success: false,
        statusCode,
        message,
        errorMessage
        // error, // প্রোডাকশনে এটি অফ রাখাই ভালো
      });
    };
  }
});

// src/app/middlewares/notFound.ts
var notFound, notFound_default;
var init_notFound = __esm({
  "src/app/middlewares/notFound.ts"() {
    "use strict";
    notFound = async (req, res) => {
      res.status(404).json({
        success: false,
        message: "API NOT FOUND",
        error: { path: req.originalUrl, errorMessage: "The path is not found that you provided" }
      });
    };
    notFound_default = notFound;
  }
});

// src/app.ts
import express4 from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
var app, app_default;
var init_app = __esm({
  "src/app.ts"() {
    "use strict";
    init_routes();
    init_globalErrorHandler();
    init_notFound();
    app = express4();
    app.use(cors());
    app.use(express4.json());
    app.use(express4.urlencoded({ extended: true }));
    app.use(cookieParser());
    app.use("/api/v1", routes_default);
    app.get("/", (req, res) => {
      res.send({ "message": "Server is running!" });
    });
    app.use(globalErrorHandler);
    app.use(notFound_default);
    app_default = app;
  }
});

// src/server.ts
var require_server = __commonJS({
  "src/server.ts"() {
    init_app();
    init_config();
    app_default.listen(config2.port, () => {
      console.log(`Server is running on port ${config2.port}`);
    });
  }
});
export default require_server();

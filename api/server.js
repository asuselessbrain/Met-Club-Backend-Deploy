var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// src/app.ts
import express7 from "express";
import cors from "cors";

// src/app/routes/routes.ts
import express6 from "express";

// src/app/modules/user/user.route.ts
import express from "express";

// src/utils/catchAsync.ts
var catchAsync = (fn) => {
  return async (req, res, next) => {
    try {
      await fn(req, res, next);
    } catch (err) {
      next(err);
    }
  };
};

// src/utils/responser.ts
var sendResponse = (res, json) => {
  res.status(json?.statusCode).json({
    success: true,
    message: json?.message,
    meta: json?.meta,
    data: json?.data
  });
};
var responser_default = sendResponse;

// generated/prisma/client.ts
import * as path from "path";
import { fileURLToPath } from "url";

// generated/prisma/internal/class.ts
import * as runtime from "@prisma/client/runtime/client";
var config = {
  "previewFeatures": [],
  "clientVersion": "7.6.0",
  "engineVersion": "75cbdc1eb7150937890ad5465d861175c6624711",
  "activeProvider": "postgresql",
  "inlineSchema": 'generator client {\n  provider = "prisma-client"\n  output   = "../generated/prisma"\n}\n\ndatasource db {\n  provider = "postgresql"\n}\n\nmodel User {\n  id String @id @default(uuid())\n\n  fullName  String\n  studentId String @unique\n\n  email String @unique\n\n  institution String\n  class       Int\n\n  guardianPhone String\n\n  district String?\n\n  password String\n\n  profileImg String?\n\n  role Role @default(student)\n\n  status Status @default(active)\n\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n}\n\nmodel IsChapterComplete {\n  userId     String\n  chapterId  Int\n  quizLevel  QuizLevel?\n  isComplete Boolean    @default(false)\n\n  @@id([userId, chapterId])\n}\n\nmodel LearningContent {\n  id        Int      @id @default(autoincrement())\n  chapterId Int      @unique\n  sections  Json\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n}\n\nmodel Tutorial {\n  id             Int      @id @default(autoincrement())\n  tutorialNumber Int      @unique\n  name           String\n  title          String\n  thumbnailImage String\n  videoLink      String\n  createdAt      DateTime @default(now())\n  updatedAt      DateTime @updatedAt\n}\n\nenum Role {\n  student\n  admin\n}\n\nenum Status {\n  active\n  blocked\n}\n\nenum QuizLevel {\n  easy\n  medium\n  hard\n}\n\nmodel School {\n  id          Int          @id @default(autoincrement())\n  locationKey String\n  nameBn      String\n  nameEn      String\n  videoLink   String?\n  addressBn   String\n  addressEn   String\n  descBn      String\n  descEn      String\n  createdAt   DateTime     @default(now())\n  updatedAt   DateTime     @updatedAt\n  members     ClubMember[]\n}\n\nmodel ClubMember {\n  id        Int      @id @default(autoincrement())\n  schoolId  Int\n  school    School   @relation(fields: [schoolId], references: [id], onDelete: Cascade)\n  nameBn    String\n  nameEn    String\n  classBn   String\n  classEn   String\n  image     String?\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n}\n',
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
config.runtimeDataModel = JSON.parse('{"models":{"User":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"fullName","kind":"scalar","type":"String"},{"name":"studentId","kind":"scalar","type":"String"},{"name":"email","kind":"scalar","type":"String"},{"name":"institution","kind":"scalar","type":"String"},{"name":"class","kind":"scalar","type":"Int"},{"name":"guardianPhone","kind":"scalar","type":"String"},{"name":"district","kind":"scalar","type":"String"},{"name":"password","kind":"scalar","type":"String"},{"name":"profileImg","kind":"scalar","type":"String"},{"name":"role","kind":"enum","type":"Role"},{"name":"status","kind":"enum","type":"Status"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"}],"dbName":null},"IsChapterComplete":{"fields":[{"name":"userId","kind":"scalar","type":"String"},{"name":"chapterId","kind":"scalar","type":"Int"},{"name":"quizLevel","kind":"enum","type":"QuizLevel"},{"name":"isComplete","kind":"scalar","type":"Boolean"}],"dbName":null},"LearningContent":{"fields":[{"name":"id","kind":"scalar","type":"Int"},{"name":"chapterId","kind":"scalar","type":"Int"},{"name":"sections","kind":"scalar","type":"Json"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"}],"dbName":null},"Tutorial":{"fields":[{"name":"id","kind":"scalar","type":"Int"},{"name":"tutorialNumber","kind":"scalar","type":"Int"},{"name":"name","kind":"scalar","type":"String"},{"name":"title","kind":"scalar","type":"String"},{"name":"thumbnailImage","kind":"scalar","type":"String"},{"name":"videoLink","kind":"scalar","type":"String"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"}],"dbName":null},"School":{"fields":[{"name":"id","kind":"scalar","type":"Int"},{"name":"locationKey","kind":"scalar","type":"String"},{"name":"nameBn","kind":"scalar","type":"String"},{"name":"nameEn","kind":"scalar","type":"String"},{"name":"videoLink","kind":"scalar","type":"String"},{"name":"addressBn","kind":"scalar","type":"String"},{"name":"addressEn","kind":"scalar","type":"String"},{"name":"descBn","kind":"scalar","type":"String"},{"name":"descEn","kind":"scalar","type":"String"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"},{"name":"members","kind":"object","type":"ClubMember","relationName":"ClubMemberToSchool"}],"dbName":null},"ClubMember":{"fields":[{"name":"id","kind":"scalar","type":"Int"},{"name":"schoolId","kind":"scalar","type":"Int"},{"name":"school","kind":"object","type":"School","relationName":"ClubMemberToSchool"},{"name":"nameBn","kind":"scalar","type":"String"},{"name":"nameEn","kind":"scalar","type":"String"},{"name":"classBn","kind":"scalar","type":"String"},{"name":"classEn","kind":"scalar","type":"String"},{"name":"image","kind":"scalar","type":"String"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"}],"dbName":null}},"enums":{},"types":{}}');
config.parameterizationSchema = {
  strings: JSON.parse('["where","User.findUnique","User.findUniqueOrThrow","orderBy","cursor","User.findFirst","User.findFirstOrThrow","User.findMany","data","User.createOne","User.createMany","User.createManyAndReturn","User.updateOne","User.updateMany","User.updateManyAndReturn","create","update","User.upsertOne","User.deleteOne","User.deleteMany","having","_count","_avg","_sum","_min","_max","User.groupBy","User.aggregate","IsChapterComplete.findUnique","IsChapterComplete.findUniqueOrThrow","IsChapterComplete.findFirst","IsChapterComplete.findFirstOrThrow","IsChapterComplete.findMany","IsChapterComplete.createOne","IsChapterComplete.createMany","IsChapterComplete.createManyAndReturn","IsChapterComplete.updateOne","IsChapterComplete.updateMany","IsChapterComplete.updateManyAndReturn","IsChapterComplete.upsertOne","IsChapterComplete.deleteOne","IsChapterComplete.deleteMany","IsChapterComplete.groupBy","IsChapterComplete.aggregate","LearningContent.findUnique","LearningContent.findUniqueOrThrow","LearningContent.findFirst","LearningContent.findFirstOrThrow","LearningContent.findMany","LearningContent.createOne","LearningContent.createMany","LearningContent.createManyAndReturn","LearningContent.updateOne","LearningContent.updateMany","LearningContent.updateManyAndReturn","LearningContent.upsertOne","LearningContent.deleteOne","LearningContent.deleteMany","LearningContent.groupBy","LearningContent.aggregate","Tutorial.findUnique","Tutorial.findUniqueOrThrow","Tutorial.findFirst","Tutorial.findFirstOrThrow","Tutorial.findMany","Tutorial.createOne","Tutorial.createMany","Tutorial.createManyAndReturn","Tutorial.updateOne","Tutorial.updateMany","Tutorial.updateManyAndReturn","Tutorial.upsertOne","Tutorial.deleteOne","Tutorial.deleteMany","Tutorial.groupBy","Tutorial.aggregate","school","members","School.findUnique","School.findUniqueOrThrow","School.findFirst","School.findFirstOrThrow","School.findMany","School.createOne","School.createMany","School.createManyAndReturn","School.updateOne","School.updateMany","School.updateManyAndReturn","School.upsertOne","School.deleteOne","School.deleteMany","School.groupBy","School.aggregate","ClubMember.findUnique","ClubMember.findUniqueOrThrow","ClubMember.findFirst","ClubMember.findFirstOrThrow","ClubMember.findMany","ClubMember.createOne","ClubMember.createMany","ClubMember.createManyAndReturn","ClubMember.updateOne","ClubMember.updateMany","ClubMember.updateManyAndReturn","ClubMember.upsertOne","ClubMember.deleteOne","ClubMember.deleteMany","ClubMember.groupBy","ClubMember.aggregate","AND","OR","NOT","id","schoolId","nameBn","nameEn","classBn","classEn","image","createdAt","updatedAt","equals","in","notIn","lt","lte","gt","gte","not","contains","startsWith","endsWith","locationKey","videoLink","addressBn","addressEn","descBn","descEn","every","some","none","tutorialNumber","name","title","thumbnailImage","chapterId","sections","string_contains","string_starts_with","string_ends_with","array_starts_with","array_ends_with","array_contains","userId","QuizLevel","quizLevel","isComplete","userId_chapterId","fullName","studentId","email","institution","class","guardianPhone","district","password","profileImg","Role","role","Status","status","is","isNot","connectOrCreate","upsert","createMany","set","disconnect","delete","connect","updateMany","deleteMany","increment","decrement","multiply","divide"]'),
  graph: "iwI-YBFuAADKAQAwbwAABAAQcAAAygEAMHEBAAAAAXhAAK0BACF5QACtAQAhnwEBAKsBACGgAQEAAAABoQEBAAAAAaIBAQCrAQAhowECAKoBACGkAQEAqwEAIaUBAQCsAQAhpgEBAKsBACGnAQEArAEAIakBAADLAakBIqsBAADMAasBIgEAAAABACABAAAAAQAgEW4AAMoBADBvAAAEABBwAADKAQAwcQEAqwEAIXhAAK0BACF5QACtAQAhnwEBAKsBACGgAQEAqwEAIaEBAQCrAQAhogEBAKsBACGjAQIAqgEAIaQBAQCrAQAhpQEBAKwBACGmAQEAqwEAIacBAQCsAQAhqQEAAMsBqQEiqwEAAMwBqwEiAqUBAADNAQAgpwEAAM0BACADAAAABAAgAwAABQAwBAAAAQAgAwAAAAQAIAMAAAUAMAQAAAEAIAMAAAAEACADAAAFADAEAAABACAOcQEAAAABeEAAAAABeUAAAAABnwEBAAAAAaABAQAAAAGhAQEAAAABogEBAAAAAaMBAgAAAAGkAQEAAAABpQEBAAAAAaYBAQAAAAGnAQEAAAABqQEAAACpAQKrAQAAAKsBAgEIAAAJACAOcQEAAAABeEAAAAABeUAAAAABnwEBAAAAAaABAQAAAAGhAQEAAAABogEBAAAAAaMBAgAAAAGkAQEAAAABpQEBAAAAAaYBAQAAAAGnAQEAAAABqQEAAACpAQKrAQAAAKsBAgEIAAALADABCAAACwAwDnEBANMBACF4QADVAQAheUAA1QEAIZ8BAQDTAQAhoAEBANMBACGhAQEA0wEAIaIBAQDTAQAhowECANYBACGkAQEA0wEAIaUBAQDUAQAhpgEBANMBACGnAQEA1AEAIakBAACEAqkBIqsBAACFAqsBIgIAAAABACAIAAAOACAOcQEA0wEAIXhAANUBACF5QADVAQAhnwEBANMBACGgAQEA0wEAIaEBAQDTAQAhogEBANMBACGjAQIA1gEAIaQBAQDTAQAhpQEBANQBACGmAQEA0wEAIacBAQDUAQAhqQEAAIQCqQEiqwEAAIUCqwEiAgAAAAQAIAgAABAAIAIAAAAEACAIAAAQACADAAAAAQAgDwAACQAgEAAADgAgAQAAAAEAIAEAAAAEACAHFQAA_wEAIBYAAIACACAXAACDAgAgGAAAggIAIBkAAIECACClAQAAzQEAIKcBAADNAQAgEW4AAMMBADBvAAAXABBwAADDAQAwcQEAmwEAIXhAAJ0BACF5QACdAQAhnwEBAJsBACGgAQEAmwEAIaEBAQCbAQAhogEBAJsBACGjAQIAmgEAIaQBAQCbAQAhpQEBAJwBACGmAQEAmwEAIacBAQCcAQAhqQEAAMQBqQEiqwEAAMUBqwEiAwAAAAQAIAMAABYAMBQAABcAIAMAAAAEACADAAAFADAEAAABACAIbgAAvwEAMG8AAB0AEHAAAL8BADCSAQIAqgEAIZoBAQCrAQAhnAEAAMABnAEjnQEgAMEBACGeAQAAwgEAIAEAAAAaACABAAAAGgAgB24AAL8BADBvAAAdABBwAAC_AQAwkgECAKoBACGaAQEAqwEAIZwBAADAAZwBI50BIADBAQAhAZwBAADNAQAgAwAAAB0AIAMAAB4AMAQAABoAIAMAAAAdACADAAAeADAEAAAaACADAAAAHQAgAwAAHgAwBAAAGgAgBJIBAgAAAAGaAQEAAAABnAEAAACcAQOdASAAAAABAQgAACIAIASSAQIAAAABmgEBAAAAAZwBAAAAnAEDnQEgAAAAAQEIAAAkADABCAAAJAAwBJIBAgDWAQAhmgEBANMBACGcAQAA_QGcASOdASAA_gEAIQIAAAAaACAIAAAnACAEkgECANYBACGaAQEA0wEAIZwBAAD9AZwBI50BIAD-AQAhAgAAAB0AIAgAACkAIAIAAAAdACAIAAApACADAAAAGgAgDwAAIgAgEAAAJwAgAQAAABoAIAEAAAAdACAGFQAA-AEAIBYAAPkBACAXAAD8AQAgGAAA-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-AQAAAAF_AQAAAAGAAQEAAAABgQEBAKQBACGCAQEAAAABgwEBAAAAAYQBAQAAAAEOFQAAogEAIBgAAKMBACAZAACjAQAgegEAAAABewEAAAAFfAEAAAAFfQEAAAABfgEAAAABfwEAAAABgAEBAAAAAYEBAQChAQAhggEBAAAAAYMBAQAAAAGEAQEAAAABCxUAAJ8BACAYAACgAQAgGQAAoAEAIHpAAAAAAXtAAAAABHxAAAAABH1AAAAAAX5AAAAAAX9AAAAAAYABQAAAAAGBAUAAngEAIQsVAACfAQAgGAAAoAEAIBkAAKABACB6QAAAAAF7QAAAAAR8QAAAAAR9QAAAAAF-QAAAAAF_QAAAAAGAAUAAAAABgQFAAJ4BACEIegIAAAABewIAAAAEfAIAAAAEfQIAAAABfgIAAAABfwIAAAABgAECAAAAAYEBAgCfAQAhCHpAAAAAAXtAAAAABHxAAAAABH1AAAAAAX5AAAAAAX9AAAAAAYABQAAAAAGBAUAAoAEAIQ4VAACiAQAgGAAAowEAIBkAAKMBACB6AQAAAAF7AQAAAAV8AQAAAAV9AQAAAAF-AQAAAAF_AQAAAAGAAQEAAAABgQEBAKEBACGCAQEAAAABgwEBAAAAAYQBAQAAAAEIegIAAAABewIAAAAFfAIAAAAFfQIAAAABfgIAAAABfwIAAAABgAECAAAAAYEBAgCiAQAhC3oBAAAAAXsBAAAABXwBAAAABX0BAAAAAX4BAAAAAX8BAAAAAYABAQAAAAGBAQEAowEAIYIBAQAAAAGDAQEAAAABhAEBAAAAAQ4VAACfAQAgGAAApQEAIBkAAKUBACB6AQAAAAF7AQAAAAR8AQAAAAR9AQAAAAF-AQAAAAF_AQAAAAGAAQEAAAABgQEBAKQBACGCAQEAAAABgwEBAAAAAYQBAQAAAAELegEAAAABewEAAAAEfAEAAAAEfQEAAAABfgEAAAABfwEAAAABgAEBAAAAAYEBAQClAQAhggEBAAAAAYMBAQAAAAGEAQEAAAABDRUAAJ8BACAWAACnAQAgFwAAnwEAIBgAAJ8BACAZAACfAQAgegIAAAABewIAAAAEfAIAAAAEfQIAAAABfgIAAAABfwIAAAABgAECAAAAAYEBAgCmAQAhCHoIAAAAAXsIAAAABHwIAAAABH0IAAAAAX4IAAAAAX8IAAAAAYABCAAAAAGBAQgApwEAIQ5uAACoAQAwbwAAgAEAEHAAAKgBADBxAgCaAQAhcwEAmwEAIXQBAJsBACF4QACdAQAheUAAnQEAIYUBAQCbAQAhhgEBAJwBACGHAQEAmwEAIYgBAQCbAQAhiQEBAJsBACGKAQEAmwEAIQ9NAACuAQAgbgAAqQEAMG8AAG0AEHAAAKkBADBxAgCqAQAhcwEAqwEAIXQBAKsBACF4QACtAQAheUAArQEAIYUBAQCrAQAhhgEBAKwBACGHAQEAqwEAIYgBAQCrAQAhiQEBAKsBACGKAQEAqwEAIQh6AgAAAAF7AgAAAAR8AgAAAAR9AgAAAAF-AgAAAAF_AgAAAAGAAQIAAAABgQECAJ8BACELegEAAAABewEAAAAEfAEAAAAEfQEAAAABfgEAAAABfwEAAAABgAEBAAAAAYEBAQClAQAhggEBAAAAAYMBAQAAAAGEAQEAAAABC3oBAAAAAXsBAAAABXwBAAAABX0BAAAAAX4BAAAAAX8BAAAAAYABAQAAAAGBAQEAowEAIYIBAQAAAAGDAQEAAAABhAEBAAAAAQh6QAAAAAF7QAAAAAR8QAAAAAR9QAAAAAF-QAAAAAF_QAAAAAGAAUAAAAABgQFAAKABACEDiwEAAGcAIIwBAABnACCNAQAAZwAgDUwAALABACBuAACvAQAwbwAAZwAQcAAArwEAMHECAKoBACFyAgCqAQAhcwEAqwEAIXQBAKsBACF1AQCrAQAhdgEAqwEAIXcBAKwBACF4QACtAQAheUAArQEAIRFNAACuAQAgbgAAqQEAMG8AAG0AEHAAAKkBADBxAgCqAQAhcwEAqwEAIXQBAKsBACF4QACtAQAheUAArQEAIYUBAQCrAQAhhgEBAKwBACGHAQEAqwEAIYgBAQCrAQAhiQEBAKsBACGKAQEAqwEAIawBAABtACCtAQAAbQAgC24AALEBADBvAABiABBwAACxAQAwcQIAmgEAIXhAAJ0BACF5QACdAQAhhgEBAJsBACGOAQIAmgEAIY8BAQCbAQAhkAEBAJsBACGRAQEAmwEAIQtuAACyAQAwbwAATwAQcAAAsgEAMHECAKoBACF4QACtAQAheUAArQEAIYYBAQCrAQAhjgECAKoBACGPAQEAqwEAIZABAQCrAQAhkQEBAKsBACEIbgAAswEAMG8AAEkAEHAAALMBADBxAgCaAQAheEAAnQEAIXlAAJ0BACGSAQIAmgEAIZMBAAC0AQAgDxUAAJ8BACAYAAC1AQAgGQAAtQEAIHqAAAAAAX2AAAAAAX6AAAAAAX-AAAAAAYABgAAAAAGBAYAAAAABlAEBAAAAAZUBAQAAAAGWAQEAAAABlwGAAAAAAZgBgAAAAAGZAYAAAAABDHqAAAAAAX2AAAAAAX6AAAAAAX-AAAAAAYABgAAAAAGBAYAAAAABlAEBAAAAAZUBAQAAAAGWAQEAAAABlwGAAAAAAZgBgAAAAAGZAYAAAAABCG4AALYBADBvAAA2ABBwAAC2AQAwcQIAqgEAIXhAAK0BACF5QACtAQAhkgECAKoBACGTAQAAtwEAIAx6gAAAAAF9gAAAAAF-gAAAAAF_gAAAAAGAAYAAAAABgQGAAAAAAZQBAQAAAAGVAQEAAAABlgEBAAAAAZcBgAAAAAGYAYAAAAABmQGAAAAAAQduAAC4AQAwbwAAMAAQcAAAuAEAMJIBAgCaAQAhmgEBAJsBACGcAQAAuQGcASOdASAAugEAIQcVAACiAQAgGAAAvgEAIBkAAL4BACB6AAAAnAEDewAAAJwBCXwAAACcAQmBAQAAvQGcASMFFQAAnwEAIBgAALwBACAZAAC8AQAgeiAAAAABgQEgALsBACEFFQAAnwEAIBgAALwBACAZAAC8AQAgeiAAAAABgQEgALsBACECeiAAAAABgQEgALwBACEHFQAAogEAIBgAAL4BACAZAAC-AQAgegAAAJwBA3sAAACcAQl8AAAAnAEJgQEAAL0BnAEjBHoAAACcAQN7AAAAnAEJfAAAAJwBCYEBAAC-AZwBIwduAAC_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-USA_UiBAUyBBVSBCVwJDWCFEWiBFXAJGXSJHXiBIXyBJYAJKYyNLZClOZipPbCpQbypRcCpScSpTcypUdQJVdi1WeCpXegJYey5ZfCpafSpbfgJcgQEvXYIBNV6DAStfhAErYIUBK2GGAStihwErY4kBK2SLAQJljAE2Zo4BK2eQAQJokQE3aZIBK2qTAStrlAECbJcBOG2YAT4"
};
async function decodeBase64AsWasm(wasmBase64) {
  const { Buffer: Buffer2 } = await import("buffer");
  const wasmArray = Buffer2.from(wasmBase64, "base64");
  return new WebAssembly.Module(wasmArray);
}
config.compilerWasm = {
  getRuntime: async () => await import("@prisma/client/runtime/query_compiler_fast_bg.postgresql.mjs"),
  getQueryCompilerWasmModule: async () => {
    const { wasm } = await import("@prisma/client/runtime/query_compiler_fast_bg.postgresql.wasm-base64.mjs");
    return await decodeBase64AsWasm(wasm);
  },
  importName: "./query_compiler_fast_bg.js"
};
function getPrismaClientClass() {
  return runtime.getPrismaClient(config);
}

// generated/prisma/internal/prismaNamespace.ts
var prismaNamespace_exports = {};
__export(prismaNamespace_exports, {
  AnyNull: () => AnyNull2,
  ClubMemberScalarFieldEnum: () => ClubMemberScalarFieldEnum,
  DbNull: () => DbNull2,
  Decimal: () => Decimal2,
  IsChapterCompleteScalarFieldEnum: () => IsChapterCompleteScalarFieldEnum,
  JsonNull: () => JsonNull2,
  JsonNullValueFilter: () => JsonNullValueFilter,
  JsonNullValueInput: () => JsonNullValueInput,
  LearningContentScalarFieldEnum: () => LearningContentScalarFieldEnum,
  ModelName: () => ModelName,
  NullTypes: () => NullTypes2,
  NullsOrder: () => NullsOrder,
  PrismaClientInitializationError: () => PrismaClientInitializationError2,
  PrismaClientKnownRequestError: () => PrismaClientKnownRequestError2,
  PrismaClientRustPanicError: () => PrismaClientRustPanicError2,
  PrismaClientUnknownRequestError: () => PrismaClientUnknownRequestError2,
  PrismaClientValidationError: () => PrismaClientValidationError2,
  QueryMode: () => QueryMode,
  SchoolScalarFieldEnum: () => SchoolScalarFieldEnum,
  SortOrder: () => SortOrder,
  Sql: () => Sql2,
  TransactionIsolationLevel: () => TransactionIsolationLevel,
  TutorialScalarFieldEnum: () => TutorialScalarFieldEnum,
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
var PrismaClientKnownRequestError2 = runtime2.PrismaClientKnownRequestError;
var PrismaClientUnknownRequestError2 = runtime2.PrismaClientUnknownRequestError;
var PrismaClientRustPanicError2 = runtime2.PrismaClientRustPanicError;
var PrismaClientInitializationError2 = runtime2.PrismaClientInitializationError;
var PrismaClientValidationError2 = runtime2.PrismaClientValidationError;
var sql = runtime2.sqltag;
var empty2 = runtime2.empty;
var join2 = runtime2.join;
var raw2 = runtime2.raw;
var Sql2 = runtime2.Sql;
var Decimal2 = runtime2.Decimal;
var getExtensionContext = runtime2.Extensions.getExtensionContext;
var prismaVersion = {
  client: "7.6.0",
  engine: "75cbdc1eb7150937890ad5465d861175c6624711"
};
var NullTypes2 = {
  DbNull: runtime2.NullTypes.DbNull,
  JsonNull: runtime2.NullTypes.JsonNull,
  AnyNull: runtime2.NullTypes.AnyNull
};
var DbNull2 = runtime2.DbNull;
var JsonNull2 = runtime2.JsonNull;
var AnyNull2 = runtime2.AnyNull;
var ModelName = {
  User: "User",
  IsChapterComplete: "IsChapterComplete",
  LearningContent: "LearningContent",
  Tutorial: "Tutorial",
  School: "School",
  ClubMember: "ClubMember"
};
var TransactionIsolationLevel = runtime2.makeStrictEnum({
  ReadUncommitted: "ReadUncommitted",
  ReadCommitted: "ReadCommitted",
  RepeatableRead: "RepeatableRead",
  Serializable: "Serializable"
});
var UserScalarFieldEnum = {
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
var IsChapterCompleteScalarFieldEnum = {
  userId: "userId",
  chapterId: "chapterId",
  quizLevel: "quizLevel",
  isComplete: "isComplete"
};
var LearningContentScalarFieldEnum = {
  id: "id",
  chapterId: "chapterId",
  sections: "sections",
  createdAt: "createdAt",
  updatedAt: "updatedAt"
};
var TutorialScalarFieldEnum = {
  id: "id",
  tutorialNumber: "tutorialNumber",
  name: "name",
  title: "title",
  thumbnailImage: "thumbnailImage",
  videoLink: "videoLink",
  createdAt: "createdAt",
  updatedAt: "updatedAt"
};
var SchoolScalarFieldEnum = {
  id: "id",
  locationKey: "locationKey",
  nameBn: "nameBn",
  nameEn: "nameEn",
  videoLink: "videoLink",
  addressBn: "addressBn",
  addressEn: "addressEn",
  descBn: "descBn",
  descEn: "descEn",
  createdAt: "createdAt",
  updatedAt: "updatedAt"
};
var ClubMemberScalarFieldEnum = {
  id: "id",
  schoolId: "schoolId",
  nameBn: "nameBn",
  nameEn: "nameEn",
  classBn: "classBn",
  classEn: "classEn",
  image: "image",
  createdAt: "createdAt",
  updatedAt: "updatedAt"
};
var SortOrder = {
  asc: "asc",
  desc: "desc"
};
var JsonNullValueInput = {
  JsonNull: JsonNull2
};
var QueryMode = {
  default: "default",
  insensitive: "insensitive"
};
var NullsOrder = {
  first: "first",
  last: "last"
};
var JsonNullValueFilter = {
  DbNull: DbNull2,
  JsonNull: JsonNull2,
  AnyNull: AnyNull2
};
var defineExtension = runtime2.Extensions.defineExtension;

// generated/prisma/enums.ts
var Role = {
  student: "student",
  admin: "admin"
};
var Status = {
  active: "active",
  blocked: "blocked"
};
var QuizLevel = {
  easy: "easy",
  medium: "medium",
  hard: "hard"
};

// generated/prisma/client.ts
globalThis["__dirname"] = path.dirname(fileURLToPath(import.meta.url));
var PrismaClient = getPrismaClientClass();

// src/app/modules/user/user.service.ts
import bcrypt from "bcrypt";

// src/config/index.ts
import dotenv from "dotenv";
import path2 from "path";
dotenv.config({ path: path2.join(process.cwd(), ".env") });
var config2 = {
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

// src/lib/prisma.ts
import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
var connectionString = `${process.env.DATABASE_URL}`;
var adapter = new PrismaPg({ connectionString });
var prisma = new PrismaClient({ adapter });

// src/app/errors/appErrors.ts
var AppError = class extends Error {
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
var appErrors_default = AppError;

// src/utils/jwt.ts
import jwt from "jsonwebtoken";
var jwtGenerator = ({ userInfo, createSecretKey, expiresIn }) => {
  const token = jwt.sign({ email: userInfo.email, role: userInfo.role }, createSecretKey, { expiresIn });
  return token;
};
var jwtVerifier = ({ token, secretKey }) => {
  const decoded = jwt.verify(token, secretKey);
  return decoded;
};

// src/app/modules/user/user.service.ts
var generateStudentId = async () => {
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
var createUser = async (payload) => {
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
    const chapters = [1, 14, 15, 3];
    const chapterData = chapters.map((chapterId) => ({
      userId: createUser3.id,
      quizLevel: null,
      chapterId
    }));
    await transaction.isChapterComplete.createMany({
      data: chapterData
    });
    return createUser3;
  });
  const accessToken = await jwtGenerator({
    userInfo: { email: result.email, role: result.role },
    createSecretKey: config2.jwt.token_secret,
    expiresIn: config2.jwt.token_expires_in
  });
  return { ...result, accessToken };
};
var isChapterCompleted = async (payload) => {
  const user = await prisma.user.findUnique({
    where: {
      email: payload.email
    },
    select: {
      id: true
    }
  });
  if (!user) {
    throw new appErrors_default(404, "User not found!");
  }
  const chapterCompletion = await prisma.isChapterComplete.findFirst({
    where: {
      userId: user.id,
      chapterId: payload.chapterId
    }
  });
  return chapterCompletion?.isComplete || false;
};
var isChapterOneCompleted = async (payload) => {
  const user = await prisma.user.findUnique({
    where: {
      email: payload.email
    },
    select: {
      id: true
    }
  });
  if (!user) {
    throw new appErrors_default(404, "User not found!");
  }
  const chapterCompletion = await prisma.isChapterComplete.findFirst({
    where: {
      userId: user.id,
      chapterId: 1
    }
  });
  if (chapterCompletion?.isComplete && chapterCompletion.quizLevel === QuizLevel.hard) {
    return true;
  }
  return false;
};
var updateChapterCompletion = async (payload) => {
  const user = await prisma.user.findUnique({
    where: {
      email: payload.email
    },
    select: {
      id: true
    }
  });
  if (!user) {
    throw new appErrors_default(404, "User not found!");
  }
  const updatedCompletion = await prisma.isChapterComplete.upsert({
    where: {
      userId_chapterId: {
        userId: user.id,
        chapterId: payload.chapterId
      }
    },
    update: {
      isComplete: true
    },
    create: {
      userId: user.id,
      chapterId: payload.chapterId,
      isComplete: true
    }
  });
  return updatedCompletion;
};
var quizLevelInfo = async (payload) => {
  const user = await prisma.user.findUnique({
    where: {
      email: payload.email
    },
    select: {
      id: true
    }
  });
  if (!user) {
    throw new appErrors_default(404, "User not found!");
  }
  const chapterCompletion = await prisma.isChapterComplete.findFirst({
    where: {
      userId: user.id,
      chapterId: payload.chapterId
    },
    select: {
      quizLevel: true
    }
  });
  return chapterCompletion?.quizLevel || null;
};
var quizLevelUpdate = async (payload) => {
  const user = await prisma.user.findUnique({
    where: {
      email: payload.email
    },
    select: {
      id: true
    }
  });
  if (!user) {
    throw new appErrors_default(404, "User not found!");
  }
  const chapterCompletion = await prisma.isChapterComplete.findFirst({
    where: {
      userId: user.id,
      chapterId: payload.chapterId
    },
    select: {
      isComplete: true
    }
  });
  console.log(chapterCompletion);
  const updatedQuizLevel = await prisma.isChapterComplete.updateMany({
    where: {
      userId: user.id,
      chapterId: payload.chapterId
    },
    data: {
      quizLevel: payload.quizLevel
    }
  });
  return updatedQuizLevel;
};
var UserService = {
  createUser,
  isChapterCompleted,
  isChapterOneCompleted,
  updateChapterCompletion,
  quizLevelInfo,
  quizLevelUpdate
};

// src/app/modules/user/user.controller.ts
var createUser2 = catchAsync(async (req, res) => {
  const result = await UserService.createUser(req.body);
  res.cookie("token", result.accessToken, { secure: false, httpOnly: true });
  responser_default(res, {
    statusCode: 201,
    message: "User created successfully!",
    data: result
  });
});
var isChapterCompleted2 = catchAsync(async (req, res) => {
  const { email } = req.user;
  const chapterId = Number(req.params.chapterId);
  const result = await UserService.isChapterCompleted({ email, chapterId });
  responser_default(res, {
    statusCode: 200,
    message: "Chapter completion status retrieved successfully!",
    data: result
  });
});
var isChapterOneCompleted2 = catchAsync(async (req, res) => {
  req.user;
  const { email } = req.user;
  const result = await UserService.isChapterOneCompleted({ email });
  responser_default(res, {
    statusCode: 200,
    message: "Chapter one completion status retrieved successfully!",
    data: result
  });
});
var updateChapterCompletion2 = catchAsync(async (req, res) => {
  const { email } = req.user;
  const chapterId = Number(req.params.chapterId);
  const result = await UserService.updateChapterCompletion({ email, chapterId });
  responser_default(res, {
    statusCode: 200,
    message: "Chapter completion status updated successfully!",
    data: result
  });
});
var quizLevelInfo2 = catchAsync(async (req, res) => {
  const { email } = req.user;
  const chapterId = Number(req.params.chapterId);
  const result = await UserService.quizLevelInfo({ email, chapterId });
  responser_default(res, {
    statusCode: 200,
    message: "Quiz level info retrieved successfully!",
    data: result
  });
});
var updateQuizLevel = catchAsync(async (req, res) => {
  const { email } = req.user;
  const chapterId = Number(req.params.chapterId);
  const { level } = req.body;
  const result = await UserService.quizLevelUpdate({ email, chapterId, quizLevel: level });
  responser_default(res, {
    statusCode: 200,
    message: "Quiz level updated successfully!",
    data: result
  });
});
var userController = {
  createUser: createUser2,
  isChapterCompleted: isChapterCompleted2,
  isChapterOneCompleted: isChapterOneCompleted2,
  updateChapterCompletion: updateChapterCompletion2,
  quizLevelInfo: quizLevelInfo2,
  updateQuizLevel
};

// src/app/middlewares/auth.ts
var auth = (...roles) => {
  return async (req, res, next) => {
    try {
      const token = req.headers.authorization;
      if (!token) {
        throw new appErrors_default(401, "Invalid signature");
      }
      const bearerToken = token.split(" ")[1];
      let decoded;
      try {
        decoded = jwtVerifier({
          token: bearerToken,
          secretKey: config2.jwt.token_secret
        });
      } catch (err) {
        if (err.name === "TokenExpiredError") {
          throw new appErrors_default(401, "Access token expired");
        }
        if (err.name === "JsonWebTokenError") {
          throw new appErrors_default(401, "Invalid token");
        }
        throw new appErrors_default(401, "Unauthorized");
      }
      console.log(decoded);
      const user = await prisma.user.findUnique({
        where: {
          email: decoded.email,
          status: Status.active
        }
      });
      if (!user) {
        throw new appErrors_default(404, "User not found");
      }
      if (roles.length && !roles.includes(user.role)) {
        throw new appErrors_default(403, "\u098F\u0987 \u0995\u09BE\u099C\u099F\u09BF \u09B8\u09AE\u09CD\u09AA\u09BE\u09A6\u09A8\u09C7\u09B0 \u099C\u09A8\u09CD\u09AF \u0986\u09AA\u09A8\u09BE\u09B0 \u0985\u09A8\u09C1\u09AE\u09A4\u09BF \u09A8\u09C7\u0987");
      }
      req.user = decoded;
      next();
    } catch (error) {
      next(error);
    }
  };
};
var auth_default = auth;

// src/app/modules/user/user.route.ts
var router = express.Router();
router.post(
  "/",
  userController.createUser
);
router.get("/chapter-completion-status/:chapterId", auth_default(Role.student, Role.admin), userController.isChapterCompleted);
router.get("/chapter-one-completion-status", auth_default(Role.student, Role.admin), userController.isChapterOneCompleted);
router.patch("/update-chapter-completion/:chapterId", auth_default(Role.student, Role.admin), userController.updateChapterCompletion);
router.get("/quiz-level-info/:chapterId", auth_default(Role.student, Role.admin), userController.quizLevelInfo);
router.patch("/update-quiz-level/:chapterId", auth_default(Role.student, Role.admin), userController.updateQuizLevel);
var UserRoutes = router;

// src/app/modules/auth/auth.route.ts
import express2 from "express";

// src/app/modules/auth/auth.service.ts
import bcrypt2 from "bcrypt";
var loginUser = async (payload) => {
  const isUserExist = await prisma.user.findUnique({
    where: {
      email: payload.email,
      status: Status.active
    }
  });
  if (!isUserExist) {
    throw new appErrors_default(404, "\u09AC\u09CD\u09AF\u09AC\u09B9\u09BE\u09B0\u0995\u09BE\u09B0\u09C0 \u0996\u09C1\u0981\u099C\u09C7 \u09AA\u09BE\u0993\u09DF\u09BE \u09AF\u09BE\u09DF\u09A8\u09BF!");
  }
  const isPasswordMarched = await bcrypt2.compare(payload.password, isUserExist.password);
  if (!isPasswordMarched) {
    throw new appErrors_default(401, "\u0987\u09AE\u09C7\u0987\u09B2 \u0985\u09A5\u09AC\u09BE \u09AA\u09BE\u09B8\u0993\u09DF\u09BE\u09B0\u09A1 \u09B8\u09A0\u09BF\u0995 \u09A8\u09AF\u09BC!");
  }
  const accessToken = jwtGenerator({
    userInfo: { email: isUserExist.email, role: isUserExist.role },
    createSecretKey: config2.jwt.token_secret,
    expiresIn: config2.jwt.token_expires_in
  });
  const refreshToken = jwtGenerator({
    userInfo: { email: isUserExist.email, role: isUserExist.role },
    createSecretKey: config2.jwt.refresh_token_secret,
    expiresIn: config2.jwt.refresh_token_expires_in
  });
  return {
    accessToken,
    refreshToken,
    user: {
      email: isUserExist.email,
      role: isUserExist.role
    }
  };
};
var generateAccessTokenUsingRefreshToken = async (refreshToken) => {
  if (!refreshToken) {
    throw new appErrors_default(401, "Unauthorized");
  }
  let decoded;
  try {
    decoded = jwtVerifier({
      token: refreshToken,
      secretKey: config2.jwt.refresh_token_secret
    });
  } catch (err) {
    if (err.name === "TokenExpiredError") {
      throw new appErrors_default(401, "Refresh token expired");
    }
    if (err.name === "JsonWebTokenError") {
      throw new appErrors_default(401, "Invalid refresh token");
    }
    throw new appErrors_default(401, "Unauthorized");
  }
  const user = await prisma.user.findUnique({
    where: {
      email: decoded.email,
      status: Status.active
    }
  });
  if (!user) {
    throw new appErrors_default(404, "User not found");
  }
  const newAccessToken = jwtGenerator({
    userInfo: { email: user.email, role: user.role },
    createSecretKey: config2.jwt.token_secret,
    expiresIn: config2.jwt.token_expires_in
  });
  return {
    accessToken: newAccessToken
  };
};
var logout = async () => {
  return null;
};
var AuthService = {
  loginUser,
  logout,
  generateAccessTokenUsingRefreshToken
};

// src/app/modules/auth/auth.controller.ts
var login = catchAsync(async (req, res) => {
  const { email, password } = req.body;
  const result = await AuthService.loginUser({ email, password });
  res.cookie("refreshToken", result.refreshToken, {
    secure: false,
    httpOnly: true,
    sameSite: "lax"
  });
  responser_default(res, {
    statusCode: 200,
    message: "User logged in successfully!",
    data: {
      accessToken: result.accessToken,
      user: result.user
    }
  });
});
var generateAccessTokenUsingRefreshToken2 = catchAsync(async (req, res) => {
  const refreshToken = req.cookies.refreshToken;
  const result = await AuthService.generateAccessTokenUsingRefreshToken(refreshToken);
  responser_default(res, {
    statusCode: 200,
    message: "Access token generated successfully!",
    data: result
  });
});
var logout2 = catchAsync(async (req, res) => {
  const result = await AuthService.logout();
  res.clearCookie("refreshToken", { secure: false, httpOnly: true, sameSite: "lax" });
  responser_default(res, {
    statusCode: 200,
    message: "Logout successfully!",
    data: result
  });
});
var AuthController = {
  login,
  logout: logout2,
  generateAccessTokenUsingRefreshToken: generateAccessTokenUsingRefreshToken2
};

// src/app/modules/auth/auth.route.ts
var router2 = express2.Router();
router2.post("/login", AuthController.login);
router2.get("/logout", AuthController.logout);
router2.get("/refresh-token", AuthController.generateAccessTokenUsingRefreshToken);
var AuthRoutes = router2;

// src/app/modules/content/content.route.ts
import express3 from "express";

// src/app/modules/content/content.service.ts
var createOrUpdateContent = async (payload) => {
  if (!payload.chapterId) {
    throw new appErrors_default(400, "Chapter is required");
  }
  if (!Array.isArray(payload.sections) || payload.sections.length === 0) {
    throw new appErrors_default(400, "At least one section is required");
  }
  const normalizedSections = payload.sections.map((section) => ({
    image: section.image ?? null,
    content: section.content ?? ""
  }));
  const result = await prisma.learningContent.upsert({
    where: {
      chapterId: payload.chapterId
    },
    create: {
      chapterId: payload.chapterId,
      sections: normalizedSections
    },
    update: {
      sections: normalizedSections
    }
  });
  return result;
};
var getContentByChapter = async (chapterId) => {
  if (!chapterId) {
    throw new appErrors_default(400, "Chapter id is required");
  }
  const result = await prisma.learningContent.findUnique({
    where: {
      chapterId
    }
  });
  return result;
};
var getAllContents = async () => {
  const result = await prisma.learningContent.findMany({
    orderBy: {
      updatedAt: "desc"
    }
  });
  return result;
};
var deleteContentByChapter = async (chapterId) => {
  if (!chapterId) {
    throw new appErrors_default(400, "Chapter id is required");
  }
  const result = await prisma.learningContent.deleteMany({
    where: {
      chapterId
    }
  });
  if (result.count === 0) {
    throw new appErrors_default(404, "Content not found");
  }
  return result;
};
var ContentService = {
  createOrUpdateContent,
  getContentByChapter,
  getAllContents,
  deleteContentByChapter
};

// src/app/modules/content/content.controller.ts
var createOrUpdateContent2 = catchAsync(async (req, res) => {
  const { chapterId, sections } = req.body;
  let parsedSections = [];
  try {
    parsedSections = JSON.parse(sections || "[]");
  } catch (err) {
    parsedSections = [];
  }
  const files = req.files || [];
  const mappedSections = parsedSections.map((s, idx) => {
    const imgIdx = typeof s.imageIndex === "number" ? s.imageIndex : null;
    const file = imgIdx !== null ? files[imgIdx] : void 0;
    const imagePath = file ? `/uploads/${file.filename}` : s.image || null;
    return {
      content: s.content || "",
      image: imagePath
    };
  });
  const payload = {
    chapterId: Number(chapterId),
    sections: mappedSections
  };
  const result = await ContentService.createOrUpdateContent(payload);
  responser_default(res, {
    statusCode: 201,
    message: "Content saved successfully!",
    data: result
  });
});
var getAllContents2 = catchAsync(async (_req, res) => {
  const result = await ContentService.getAllContents();
  responser_default(res, {
    statusCode: 200,
    message: "Contents retrieved successfully!",
    data: result
  });
});
var getContentByChapter2 = catchAsync(async (req, res) => {
  const chapterId = Number(req.params.chapterId);
  const result = await ContentService.getContentByChapter(chapterId);
  responser_default(res, {
    statusCode: 200,
    message: "Content retrieved successfully!",
    data: result
  });
});
var deleteContentByChapter2 = catchAsync(async (req, res) => {
  const chapterId = Number(req.params.chapterId);
  const result = await ContentService.deleteContentByChapter(chapterId);
  responser_default(res, {
    statusCode: 200,
    message: "Content deleted successfully!",
    data: result
  });
});
var ContentController = {
  createOrUpdateContent: createOrUpdateContent2,
  getAllContents: getAllContents2,
  getContentByChapter: getContentByChapter2,
  deleteContentByChapter: deleteContentByChapter2
};

// src/app/modules/content/content.route.ts
import multer from "multer";
import path3 from "path";
var router3 = express3.Router();
var uploadDir = path3.join(process.cwd(), "uploads");
var storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadDir),
  filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`)
});
var upload = multer({ storage });
router3.get("/", ContentController.getAllContents);
router3.post("/", auth_default(Role.admin), upload.array("images"), ContentController.createOrUpdateContent);
router3.patch("/:chapterId", auth_default(), upload.array("images"), ContentController.createOrUpdateContent);
router3.delete("/:chapterId", auth_default(), ContentController.deleteContentByChapter);
router3.get("/chapter/:chapterId", auth_default(), ContentController.getContentByChapter);
var ContentRoutes = router3;

// src/app/modules/tutorial/tutorial.route.ts
import express4 from "express";

// src/app/modules/tutorial/tutorial.service.ts
var createOrUpdateTutorial = async (payload) => {
  if (!payload.tutorialNumber || !payload.name || !payload.title || !payload.videoLink) {
    throw new appErrors_default(400, "Tutorial number, name, title and video link are required");
  }
  if (!payload.thumbnailImage) {
    throw new appErrors_default(400, "Tutorial thumbnail is required");
  }
  const data = {
    tutorialNumber: payload.tutorialNumber,
    name: payload.name,
    title: payload.title,
    thumbnailImage: payload.thumbnailImage,
    videoLink: payload.videoLink
  };
  if (payload.id) {
    return prisma.tutorial.update({
      where: { id: payload.id },
      data
    });
  }
  return prisma.tutorial.create({
    data
  });
};
var getAllTutorials = async () => {
  return prisma.tutorial.findMany({
    orderBy: { tutorialNumber: "asc" }
  });
};
var getTutorialById = async (id) => {
  if (!id) {
    throw new appErrors_default(400, "Tutorial id is required");
  }
  const tutorial = await prisma.tutorial.findUnique({
    where: { id }
  });
  if (!tutorial) {
    throw new appErrors_default(404, "Tutorial not found");
  }
  return tutorial;
};
var deleteTutorial = async (id) => {
  if (!id) {
    throw new appErrors_default(400, "Tutorial id is required");
  }
  const result = await prisma.tutorial.deleteMany({
    where: { id }
  });
  if (result.count === 0) {
    throw new appErrors_default(404, "Tutorial not found");
  }
  return result;
};
var TutorialService = {
  createOrUpdateTutorial,
  getAllTutorials,
  getTutorialById,
  deleteTutorial
};

// src/app/modules/tutorial/tutorial.controller.ts
var createOrUpdateTutorial2 = catchAsync(async (req, res) => {
  const { tutorialNumber, name, title, videoLink, thumbnailImage } = req.body;
  const tutorialId = req.params.id ? Number(req.params.id) : null;
  const thumbnailPath = req.file ? `/uploads/${req.file.filename}` : thumbnailImage || null;
  const result = await TutorialService.createOrUpdateTutorial({
    id: tutorialId,
    tutorialNumber: Number(tutorialNumber),
    name,
    title,
    thumbnailImage: thumbnailPath,
    videoLink
  });
  responser_default(res, {
    statusCode: 200,
    message: tutorialId ? "Tutorial updated successfully!" : "Tutorial created successfully!",
    data: result
  });
});
var getAllTutorials2 = catchAsync(async (_req, res) => {
  const result = await TutorialService.getAllTutorials();
  responser_default(res, {
    statusCode: 200,
    message: "Tutorials retrieved successfully!",
    data: result
  });
});
var getTutorialById2 = catchAsync(async (req, res) => {
  const tutorialId = Number(req.params.id);
  const result = await TutorialService.getTutorialById(tutorialId);
  responser_default(res, {
    statusCode: 200,
    message: "Tutorial retrieved successfully!",
    data: result
  });
});
var deleteTutorial2 = catchAsync(async (req, res) => {
  const tutorialId = Number(req.params.id);
  const result = await TutorialService.deleteTutorial(tutorialId);
  responser_default(res, {
    statusCode: 200,
    message: "Tutorial deleted successfully!",
    data: result
  });
});
var TutorialController = {
  createOrUpdateTutorial: createOrUpdateTutorial2,
  getAllTutorials: getAllTutorials2,
  getTutorialById: getTutorialById2,
  deleteTutorial: deleteTutorial2
};

// src/app/modules/tutorial/tutorial.route.ts
import multer2 from "multer";
import path4 from "path";
import fs from "fs";
var router4 = express4.Router();
var uploadDir2 = path4.join(process.cwd(), "uploads");
if (!fs.existsSync(uploadDir2)) {
  fs.mkdirSync(uploadDir2, { recursive: true });
}
var storage2 = multer2.diskStorage({
  destination: (_req, _file, cb) => cb(null, uploadDir2),
  filename: (_req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`)
});
var upload2 = multer2({ storage: storage2 });
router4.get("/", TutorialController.getAllTutorials);
router4.get("/:id", TutorialController.getTutorialById);
router4.post("/", upload2.single("thumbnail"), TutorialController.createOrUpdateTutorial);
router4.patch("/:id", upload2.single("thumbnail"), TutorialController.createOrUpdateTutorial);
router4.delete("/:id", TutorialController.deleteTutorial);
var TutorialRoutes = router4;

// src/app/modules/school/school.route.ts
import express5 from "express";

// src/app/modules/school/school.service.ts
var createSchool = async (payload) => {
  const { members, ...schoolData } = payload;
  return await prisma.school.create({
    data: {
      ...schoolData,
      ...members && { members: { create: members } }
    },
    include: { members: true }
  });
};
var getSchoolsByLocation = async (locationKey) => {
  return await prisma.school.findMany({
    where: { locationKey },
    include: { members: true }
  });
};
var getSchoolById = async (id) => {
  return await prisma.school.findUnique({
    where: { id },
    include: { members: true }
  });
};
var updateSchool = async (id, payload) => {
  const { members, ...schoolData } = payload;
  if (members) {
    await prisma.clubMember.deleteMany({ where: { schoolId: id } });
  }
  return await prisma.school.update({
    where: { id },
    data: {
      ...schoolData,
      ...members && { members: { create: members } }
    },
    include: { members: true }
  });
};
var deleteSchool = async (id) => {
  return await prisma.school.delete({
    where: { id }
  });
};
var createMember = async (payload) => {
  return await prisma.clubMember.create({
    data: payload
  });
};
var updateMember = async (id, payload) => {
  return await prisma.clubMember.update({
    where: { id },
    data: payload
  });
};
var deleteMember = async (id) => {
  return await prisma.clubMember.delete({
    where: { id }
    // add
  });
};
var SchoolService = {
  createSchool,
  getSchoolsByLocation,
  getSchoolById,
  updateSchool,
  deleteSchool,
  createMember,
  updateMember,
  deleteMember
};

// src/app/modules/school/school.controller.ts
var createSchool2 = catchAsync(async (req, res) => {
  const result = await SchoolService.createSchool(req.body);
  responser_default(res, {
    statusCode: 201,
    message: "School created successfully",
    data: result
  });
});
var getSchoolsByLocation2 = catchAsync(async (req, res) => {
  const locationKey = req.query.location;
  const result = await SchoolService.getSchoolsByLocation(locationKey);
  responser_default(res, {
    statusCode: 200,
    message: "Schools retrieved successfully",
    data: result
  });
});
var getSchoolById2 = catchAsync(async (req, res) => {
  const id = Number(req.params.id);
  const result = await SchoolService.getSchoolById(id);
  responser_default(res, {
    statusCode: 200,
    message: "School retrieved successfully",
    data: result
  });
});
var updateSchool2 = catchAsync(async (req, res) => {
  const id = Number(req.params.id);
  const result = await SchoolService.updateSchool(id, req.body);
  responser_default(res, {
    statusCode: 200,
    message: "School updated successfully",
    data: result
  });
});
var deleteSchool2 = catchAsync(async (req, res) => {
  const id = Number(req.params.id);
  const result = await SchoolService.deleteSchool(id);
  responser_default(res, {
    statusCode: 200,
    message: "School deleted successfully",
    data: result
  });
});
var createMember2 = catchAsync(async (req, res) => {
  const result = await SchoolService.createMember(req.body);
  responser_default(res, {
    statusCode: 201,
    message: "Member created successfully",
    data: result
  });
});
var updateMember2 = catchAsync(async (req, res) => {
  const id = Number(req.params.id);
  const result = await SchoolService.updateMember(id, req.body);
  responser_default(res, {
    statusCode: 200,
    message: "Member updated successfully",
    data: result
  });
});
var deleteMember2 = catchAsync(async (req, res) => {
  const id = Number(req.params.id);
  const result = await SchoolService.deleteMember(id);
  responser_default(res, {
    statusCode: 200,
    message: "Member deleted successfully",
    data: result
  });
});
var SchoolController = {
  createSchool: createSchool2,
  getSchoolsByLocation: getSchoolsByLocation2,
  getSchoolById: getSchoolById2,
  updateSchool: updateSchool2,
  deleteSchool: deleteSchool2,
  createMember: createMember2,
  updateMember: updateMember2,
  deleteMember: deleteMember2
};

// src/app/modules/school/school.route.ts
var router5 = express5.Router();
router5.get("/", SchoolController.getSchoolsByLocation);
router5.get("/:id", SchoolController.getSchoolById);
router5.post("/", auth_default(Role.admin), SchoolController.createSchool);
router5.patch("/:id", auth_default(Role.admin), SchoolController.updateSchool);
router5.delete("/:id", auth_default(Role.admin), SchoolController.deleteSchool);
router5.post("/members", auth_default(Role.admin), SchoolController.createMember);
router5.patch("/members/:id", auth_default(Role.admin), SchoolController.updateMember);
router5.delete("/members/:id", auth_default(Role.admin), SchoolController.deleteMember);
var SchoolRoutes = router5;

// src/app/routes/routes.ts
var router6 = express6.Router();
var routes = [
  {
    path: "/user",
    route: UserRoutes
  },
  {
    path: "/auth",
    route: AuthRoutes
  },
  {
    path: "/content",
    route: ContentRoutes
  },
  {
    path: "/tutorials",
    route: TutorialRoutes
  },
  {
    path: "/schools",
    route: SchoolRoutes
  }
];
routes.forEach((route) => router6.use(route.path, route.route));
var routes_default = router6;

// src/app.ts
import cookieParser from "cookie-parser";

// src/app/errors/globalErrorHandler.ts
import jwt2 from "jsonwebtoken";
var { JsonWebTokenError, TokenExpiredError } = jwt2;
var globalErrorHandler = (error, req, res, next) => {
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
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
    errorMessage
    // error, // প্রোডাকশনে এটি অফ রাখাই ভালো
  });
};

// src/app/middlewares/notFound.ts
var notFound = async (req, res) => {
  res.status(404).json({
    success: false,
    message: "API NOT FOUND",
    error: { path: req.originalUrl, errorMessage: "The path is not found that you provided" }
  });
};
var notFound_default = notFound;

// src/app.ts
import path5 from "path";
var app = express7();
app.use(cors({
  origin: ["http://localhost:5173", "http://meteorologyclub.com", "http://meteorologyclub.com"],
  credentials: true
}));
app.use(express7.json());
app.use(express7.urlencoded({ extended: true }));
app.use(cookieParser());
app.use("/api/v1", routes_default);
app.use(
  "/uploads",
  express7.static(path5.join(process.cwd(), "uploads"))
);
app.get("/", (req, res) => {
  res.send({ "message": "Server is running!" });
});
app.use(globalErrorHandler);
app.use(notFound_default);
var app_default = app;

// src/utils/seedAdmin.ts
import bcrypt3 from "bcrypt";
var seedAdmin = async () => {
  try {
    const adminEmail = "admin2@gmail.com";
    const adminPassword = "123456";
    const hashedPassword = await bcrypt3.hash(adminPassword, Number(config2.salt_rounds));
    if (!adminEmail || !adminPassword) {
      console.warn("Admin email or password not provided. Skipping admin seeding.");
      return;
    }
    const existingAdmin = await prisma.user.findUnique({
      where: {
        email: adminEmail
      }
    });
    if (!existingAdmin) {
      await prisma.user.create({
        data: {
          fullName: "\u0986\u09B0\u09BF\u09AB \u09B0\u09B9\u09AE\u09BE\u09A8",
          studentId: "STU-2026-8942",
          email: adminEmail,
          password: hashedPassword,
          role: Role.admin,
          institution: "\u09A2\u09BE\u0995\u09BE \u0995\u09B2\u09C7\u099C",
          class: 11,
          guardianPhone: "+8801712345678"
        }
      });
      console.log("admin created successfully");
    }
  } catch (error) {
    console.error("Error seeding admin user:", error);
  }
};

// src/server.ts
app_default.listen(config2.port, async () => {
  await seedAdmin();
  console.log(`Server is running on port ${config2.port}`);
});

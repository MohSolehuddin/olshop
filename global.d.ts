import MongoAtlas from "@/utils/db";

declare global {
  var db: MongoAtlas | undefined;
}

export {};

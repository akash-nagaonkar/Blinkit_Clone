import AdminJS from "adminjs";
import AdminJSFastify from "@adminjs/fastify";
import * as AdminJSMongoose from "@adminjs/mongoose";
import * as Models from "../models/index.js";

AdminJS.registerAdapter(AdminJSMongoose);

export const admin = new AdminJS({
  resources: [
    {
      resouce: Models.Customer,
      options: {
        listProperties: ["phone", "role", "isActivated"],
        filterProperties: ["phone", "role"],
      },
    },
    {
      resouce: Models.DeliveryPartner,
      options: {
        listProperties: ["email", "role", "isActivated"],
        filterProperties: ["email", "role"],
      },
    },
    {
      resouce: Models.Admin,
      options: {
        listProperties: ["email", "role", "isActivated"],
        filterProperties: ["email", "role"],
      },
    },
    { resource: Models.Branch },
  ],

  branding:{
    companyName: "Blinkit",
    withMadeWithLove: false
  },
  rootPath: "/admin",
});


export const buildAdminRouter = () => {
    // await AdminJSFastify.buildAuthenticatedRouter(admin, {}, app, {
    // });
}

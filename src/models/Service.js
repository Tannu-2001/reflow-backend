
import mongoose from "mongoose";

const ServiceSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    backgroundImage: { type:String, default:"" },
    heroSubtitle: { type: String, default: "" },
    heroTags: [{ type: String }],
    themeColor: { type: String, default: "#ffffff" },
    videoUrl: { type: String, default: "" },
    visionTitle: { type: String, default: "" },
    visionParagraphs: [{ type: String }],
    benefitsTitle: { type: String, default: "" },
    whiteTitle: { type: String, default:""},
    whiteSubtitle: {type: String, default:""},
    thumbnail: { type: String, default: "" },     
    whiteImage: { type: String, default: "" }, 
    whiteBodyHtml: [
      { column: { type: Number, required:true},
        html: { type: String, required:true}
    }
    ],
    strategicWork: [
      {
        order: { type: Number, required:true},
        title: { type: String, required:true},
        description: { type: String, default:""}
      }
    ],
    brandLogos: [
      {
        name: { type: String, required:true},
        logo: { type: String, required:true}
      }
    ],
    featuredProjects: [{ type: mongoose.Schema.Types.ObjectId, ref: "Project" }],
  },
  { timestamps: true }
);

export default mongoose.model("Service", ServiceSchema);

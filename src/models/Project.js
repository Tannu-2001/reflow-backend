import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },          
    slug: { type: String, unique: true },             
    summary: { type: String, default: "" },            
    description: { type: String, default: "" },  
    details: { type: String, default:""},  
    client: { type: String, default: "" },             
    year: { type: String, default: "" },               
    services: [{ type: String }],                      
    category: { type: String, default: "" },      
    videoUrl: { type: String, default:""},     
    liveUrl: String,
    themeColor: { type: String, default: "#ffffff"},
    thumbnail: { type: String, default: "" },          
    heroImage: [{ type: String, default: "" }],
    bigImage: [{ type: String, default: "" }],          
    gallery: [{ type: String }],                       

  },
  { timestamps: true }
);

export default mongoose.model("Project", ProjectSchema);
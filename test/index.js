const { default: Axios } = require("axios")

let get_products =  async ()=>{
    let product = await Axios("http://localhost/wp-json/auto/scrappers/get_products?page=2");
    console.log("product ", product.data);
}
// get_products();

let update_single_post =  async ()=>{
    let product = await Axios.post("http://localhost/wp-json/auto/scrappers/update_single_post", {
        data:JSON.stringify({"post_id":223, youtube_ids:["fjdlfjdl", "fldjlfjd"]})
    });
    console.log("product ", product.data);
}
update_single_post();
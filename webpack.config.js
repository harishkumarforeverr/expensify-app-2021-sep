const path=require("path");  
const miniCssExtractPlugin =require("mini-css-extract-plugin"); 

module.exports={
    entry:"./src/app.js",
    output:{
        filename:"bundle.js",
        path:path.join(__dirname,"public")
    },
    mode:"development",
    module : {
        rules:[
            {
                test:/\.js$/,
                exclude:/node_modules/,
                use:{
                    loader:"babel-loader",
                    options:{
                        presets:[ "@babel/preset-react",
                        "@babel/preset-env" ]
                    }
                }
            }, 
            {
                test: /\.s[ac]ss$/i,
                use: [
                  // Creates `style` nodes from JS strings
                  "style-loader",
                  // Translates CSS into CommonJS
                  "css-loader",
                  // Compiles Sass to CSS
                  "sass-loader",
                ],
              },
            // {
            //     test: /\.s[ac]ss$/i,
            //     use: [
            //       // Creates `style` nodes from JS strings
            //        "style-loader",
            //       // Translates CSS into CommonJS
            //        "css-loader",
            //       // Compiles Sass to CSS
            //       "sass-loader",
            //     ],
            //   },
        ]
    },
    devtool : 'cheap-module-source-map',
    devServer:{
        contentBase:path.join(__dirname,"public") ,
        historyApiFallback: true,
    }, 
      
}
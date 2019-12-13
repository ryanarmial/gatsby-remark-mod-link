const visit = require("unist-util-visit")
const { NODE_ENV } = process.env

module.exports = ({ markdownAST }, pluginOptions) => {
  if(NODE_ENV == 'production'){
    visit(markdownAST, "link", node => {
      const re = new RegExp("^(http|https)://", "i");
      if(!re.test(node.url)){
        node.url += '/index.html'
      }
    })
  }
  return markdownAST
}
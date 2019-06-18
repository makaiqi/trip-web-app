
//防止表单JS注入攻击

export default function escapeHTML(a){

  return a.replace(/<script>/g, "").replace(/<\/script>/g, "");

}
var unsene=unsene||{};
var lang=$.cookie('UNSENE_locale');
var list=['en','zh_CN','zh_TW'];
var browserLang= navigator.language;
if(browserLang){
    browserLang= browserLang.replace('-','_');
}else {
    browserLang= 'en';
}

if(!lang && browserLang.indexOf('en')<0)   {
    lang=browserLang;
     window.location.href="/?lang="+browserLang;

}
if (!lang || list.indexOf(lang)<0)  {
    lang='en';
}
var en_dictionary={};
loadJsDynamic('/js/unsene/lang/'+lang+'.js'); 
function loadJsDynamic(filename){
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("src", filename);
    if (typeof fileref!="undefined") {
        document.getElementsByTagName("head")[0].appendChild(fileref);
    }
}

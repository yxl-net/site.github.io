window.navVM=new Vue({
    el: '#nav',
    data: {
        items:[
            {
                label:"上手",
                href:"./index.html",
            },
            {
                label:"样式",
                href:"./style.html",
            },{
                label:"按钮",
                href:"./button.html",
            },{
                label:"按钮组",
                href:"./buttongroup.html",
            },{
                label:"标签",
                href:"./tag.html",
            },{
                label:"数值框",
                href:"./number.html",
            },{
                label:"开关",
                href:"./switch.html",
            },{
                label:"分页",
                href:"./pagination.html",
            }
        ]
    }
});

window.onload=()=>{
    document.querySelector("#app table").addEventListener("click",e=>{
        if(e.target.className=="el-icon-document-copy"){
            const copy = ex=>{
                ex.preventDefault();
                if (ex.clipboardData) {
                    ex.clipboardData.setData('text/plain', e.target.parentElement.textContent.replaceAll('    ',' '));
                } else if (window.clipboardData) {
                    window.clipboardData.setData('Text', e.target.parentElement.textContent.replaceAll('    ',' '));
                }
                window.navVM.__proto__.$message.success("代码已复制");
            };
            window.addEventListener('copy', copy);
            document.execCommand('copy');
            window.removeEventListener('copy', copy);
        }
    })
};

function code(name,data){
    let s=`<span class="cltgt">&lt;</span><span class="cname">${name}</span><br/>`;
    let v;
    for(const k in data){
        if(k=="text"){
            break;
        }
        v=data[k];
        if(k=='value'){
            s+=`&nbsp;&nbsp;&nbsp;&nbsp;<span class="cattr">v-model</span><span class="cequ">=</span><span class="cval">"model.v"</span><br/>`;
        }else if(typeof v=='number'){
            s+=`&nbsp;&nbsp;&nbsp;&nbsp;<span class="cattr">:${k}</span><span class="cequ">=</span><span class="cval">"${v}"</span><br/>`;
        }
        else if(typeof v=='boolean'){
            if(v){
            s+=`&nbsp;&nbsp;&nbsp;&nbsp;<span class="cattr">${k}</span><br/>`;                
            }
        }else if(v!='default'&&v.trim()!=''){
            s+=`&nbsp;&nbsp;&nbsp;&nbsp;<span class="cattr">${k}</span><span class="cequ">=</span><span class="cval">"${v}"</span><br/>`;
        }
    } 
    if(data.text){
        s+=`<span class="cltgt">&gt;</span><span class="ctext">${data.text}</span><span class="cltgt">&lt;/</span><span class="cname">${name}</span><span class="cltgt">&gt;</span>`;
    }else{
        s+=`<span class="cltgt">&gt;</span><span class="cltgt">&lt;/</span><span class="cname">${name}</span><span class="cltgt">&gt;</span>`;
    }
    return s;
}
class Uploads{
    constructor(that){
        this.settings = {
            readFile:null,
            btn:null
        }
        this.arr=[]
    }
    init(opt){
        let _this = this;
        $extend(this.settings,opt);
        if(this.settings.readFile){
            this.settings.readFile.change(function(ev){
                _this.addPic(ev)
            })
        }
    }
}
$.ajax({
    method: "post",
    url: "php/post_file.php",
    data: "formData",
    processData:"false",
    contentType:"false",
    success: function (data) {
        console.log(111)
    }
});

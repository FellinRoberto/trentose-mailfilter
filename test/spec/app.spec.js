describe("MailModel", function() {
    it("testo lo stato true", function(){

	MailModel.init();
expect(MailModel.filter()).toEqual(["carlo@gmail.com", "trentose2@googlegroups.com"]);


	
    });

    it("testo lo stato false", function(){
	MailModel.init();
expect(MailModel.filter()).not.toEqual(["carlo@gmail.com", "trentose2@googlegroups.com", "trentose2@googlegroups.com"]);
	
    });
    
});

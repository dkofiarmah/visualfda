(function() {
  'use strict';

  describe('openFDA', function(){

    beforeEach(module('openFDA'));

    var openFDAService;
    // inject service
    beforeEach(inject(function(_openFDAService_){
      openFDAService = _openFDAService_;
    }));

    describe('Build Urls',function(){

      it('should build a url to get drugs events from //api.fda.gov/drug/event.json', function() {
        expect(openFDAService.url('drug','event')).toBe('//api.fda.gov/drug/event.json');
      });

      it('should build a url to get drugs labels from //api.fda.gov/drug/label.json', function() {
        expect(openFDAService.url('drug','label')).toBe('//api.fda.gov/drug/label.json');
      });

      it('should build a url to get drugs enforcement reports from //api.fda.gov/drug/enforcement.json', function() {
        expect(openFDAService.url('drug','enforcement')).toBe('//api.fda.gov/drug/enforcement.json');
      });

      it('should build a url to get devices events from //api.fda.gov/device/event.json', function() {
        expect(openFDAService.url('device','event')).toBe('//api.fda.gov/device/event.json');
      });

      it('should build a url to get devices enforcement reports from //api.fda.gov/device/enforcement.json', function() {
        expect(openFDAService.url('device','enforcement')).toBe('//api.fda.gov/device/enforcement.json');
      });

      it('should build a url to get foods enforcement reports from //api.fda.gov/food/enforcement.json', function() {
        expect(openFDAService.url('food','enforcement')).toBe('//api.fda.gov/food/enforcement.json');
      });

      it('should build a url to get the api status from //api.fda.gov/status', function() {
        expect(openFDAService.statusURL()).toBe('//api.fda.gov/status');
      });

    });
    /*
    describe('API Status',function(){

      describe('resources', function() {
          var $httpBackend;
          // inject service
          beforeEach(inject(function(_$httpBackend_){
            $httpBackend = _$httpBackend_;
          }));

        it('should return ok for drugs', function(){
          var status;
          var resource = [
              {
                "endpoint": "recall",
                "status": "GREEN",
                "last_updated": "2015-05-31",
                "documents": 25540,
                "requests": 44153,
                "latency": 5.181301383824429
              }
            ];

          $httpBackend.expect('GET', openFDAService.statusURL()).respond(200, resource);

          status = openFDAService.status();

          $httpBackend.flush();

          expect(status[0]).toBe(resource);

        });
      });

    });
    */


  });
})();

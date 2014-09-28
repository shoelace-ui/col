
var should = require('should');
var stylus = require('stylus');
var fs = require('fs');

describe('col', function(){
  it('should match fixture', function(done){
    fs.readFile(__dirname + '/col.styl', 'utf8', function(err, str){
      if (err) return done(err);
      stylus(str, {paths: ['node_modules']}).render(function(err, css){
        console.log(css);
        fs.readFile(__dirname + '/col.css', 'utf8', function(err, data){
          if (err) return done(err);
          css.trim().should.equal(data.trim());
          done();
        });
      });
    });
  });
});

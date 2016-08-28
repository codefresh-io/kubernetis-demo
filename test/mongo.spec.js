var mongoose =  require('mongoose');
describe('mongo', ()=>{
  beforeEach('test', ()=>{
    console.log(`mongodb url ${process.env.MONGO_URL}`);
    var mongoUrl = process.env.MONGO_URL || 'mongodb';
    mongoose.connect(`mongodb://${mongoUrl}:27017/my_database`);
  })
  it('add blog obje', (done)=>{

    //create mmodel;
    var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

    var BlogPost = new Schema({
        author    : ObjectId,
        title     : String,
        body      : String,
        date      : Date
    });

    var BlogModel = mongoose.model('BlogModel', BlogPost);
    var post  = new BlogModel();
    post.set({ title: 'My comment' });
    post.set({ date: new Date()});

    post.save(function (err) {
      if (!err) console.log('Success!');

      done(err);
    });
});
});

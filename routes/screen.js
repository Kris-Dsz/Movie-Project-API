const router = require("express").Router();
let Screen = require('../models/screen.model');
const mongoose = require('mongoose');
let Timing = require('../models/timings.model')
router.post('/check',(req, res) => {
    const timing_id = mongoose.Types.ObjectId(req.body.id);
    const date = new Date(req.body.date).toLocaleDateString('en-CA').toString();

    Timing.findById(timing_id)
          .then(data=>{
            var key, count = 0;
            for(key in data.shows) {
              if(data.shows.hasOwnProperty(key)) {
                count++;
              }
            }
            let flag=0;
            for(i=0; i<count; i++)
              {
                if(date==data.shows[i].date)
                   {
                     flag=1;
                     Screen.findById(data.shows[i].screenId)
                            .then(data => res.send(data))
                            .catch(err => res.status(400).json('Error: '+err));
                     break;
                   }
              }
            if(flag==0)
            {
              const newScreen = new Screen();
              var new_screen = {screenId: newScreen._id, date: date};
              data.shows.push(new_screen);
              data.save();
              newScreen.save()
                  .then(() => res.json(newScreen))
                  .catch(err => res.status(400).json('Error: '+err));
            }
          }).catch(err => res.status(400).json('Error: '+err))
    
  });

router.post('/update',(req,res)=>{
        const id=mongoose.Types.ObjectId(req.body.id);
        Screen.findByIdAndUpdate(id,{reservedSeats: req.body.seatsBooked},{new: true})
              .then(data => res.send(data))
              .catch(err => res.status(400).json('Error: '+err));
});

module.exports = router;
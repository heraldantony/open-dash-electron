import {
	Router
} from 'express'

const router = Router()

router.get('/songs/:id', function(req, res)  {

   res.sendFile("./media/music/26_The Beatles_Let It Be.mp3");

}

export default router

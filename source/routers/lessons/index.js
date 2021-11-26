import { Router } from 'express';
import { get, create } from './route';
import { getByHash, updateByHash, removeByHash } from './hash';
import { createVideo, getVideoByHash, removeVideoByHash } from './hash/videos';
import { createKeynote, getKeynoteByHash, removeKeynoteByHash } from './hash/keynotes';

export const router = Router();

router.get('/', get);
router.post('/', create);

router.get('/:lessonHash', getByHash);
router.put('/:lessonHash', updateByHash);
router.delete('/:lessonHash', removeByHash);

router.post('/:lessonHash/videos', createVideo);
router.get('/:lessonHash/videos/:videoHash', getVideoByHash);
router.delete('/:lessonHash/videos/:videoHash', removeVideoByHash);

router.post('/:lessonHash/keynotes', createKeynote);
router.get('/:lessonHash/keynotes/:keynoteHash', getKeynoteByHash);
router.delete('/:lessonHash/keynotes/:keynoteHash', removeKeynoteByHash);

export { router as lessons };

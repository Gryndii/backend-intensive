import { Router } from 'express';
import { get, create } from './route';
import { getByHash, updateByHash, removeByHash } from './hash';
import { createVideo, getVideoByHash, removeVideoByHash } from './hash/videos';
import { createKeynote, getKeynoteByHash, removeKeynoteByHash } from './hash/keynotes';
import { auth } from '../../utils';

export const router = Router();

router.get('/', get);
router.post('/', [ auth ], create);

router.get('/:lessonHash', [ auth ], getByHash);
router.put('/:lessonHash', [ auth ], updateByHash);
router.delete('/:lessonHash', [ auth ], removeByHash);

router.post('/:lessonHash/videos', [ auth ], createVideo);
router.get('/:lessonHash/videos/:videoHash', [ auth ], getVideoByHash);
router.delete('/:lessonHash/videos/:videoHash', [ auth ], removeVideoByHash);

router.post('/:lessonHash/keynotes', [ auth ], createKeynote);
router.get('/:lessonHash/keynotes/:keynoteHash', [ auth ], getKeynoteByHash);
router.delete('/:lessonHash/keynotes/:keynoteHash', [ auth ], removeKeynoteByHash);

export { router as lessons };

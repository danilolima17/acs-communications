import * as express from 'express';
import { createThread } from '../lib/chat/moderator';

const router = express.Router();

/**
 * route: /createThread/
 *
 * purpose: Create a new chat thread.
 *
 * @returns The new threadId as string
 *
 */

router.post('/', async function (req, res, next) {
  try {
    const threadId = await createThread();
    // Você pode usar req para acessar informações da requisição, se necessário.
    // Por exemplo, req.body pode conter dados enviados pelo cliente.
    
    // Agora, enviamos o threadId como resposta.
    res.send(threadId);
  } catch (error) {
    // Você pode usar next para encaminhar erros para o middleware de tratamento de erros.
    next(error);
  }
});

export default router;

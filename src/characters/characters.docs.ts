/**
 * @swagger
 * definitions:
 *   Character:
 *     properties:
 *       id:
 *         description: Character's unique id.
 *         type: string
 *         example: 2c655a62-d037-44c5-b26e-9159f874084c
 *       name:
 *         description: Character's name.
 *         type: string
 *         example: Luke Sywalker
 *       planet:
 *         description: Character's planet.
 *         type: string
 *         example: Alderaan
 *       episodes:
 *         description: List of character's episodes.
 *         type: array
 *         example: ['NEWHOPE', 'EMPIRE', 'JEDI']
 */

/**
 * @swagger
 * /characters:
 *   get:
 *     summary: Returns all character specified by optional pagination parameters.
 *     tags: [Characters]
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: query
 *         name: offset
 *         required: false
 *         description: Characters offset.
 *         type: number
 *         example: 1
 *         default: 0
 *       - in: query
 *         name: limit
 *         required: false
 *         description: Characters limit.
 *         type: number
 *         example: 1
 *         default: 100
 *     responses:
 *       200:
 *         description: Found characters
 *         schema:
 *           type: array
 *           items:
 *             $ref: '#/definitions/Character'
 */

/**
 * @swagger
 * /characters/{id}:
 *   get:
 *     summary: Returns a character specified by id.
 *     tags: [Characters]
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description:
 *           $ref: '#/definitions/Character/properties/id/description'
 *         type:
 *           $ref: '#/definitions/Character/properties/id/type'
 *         example:
 *           $ref: '#/definitions/Character/properties/id/example'
 *     responses:
 *       200:
 *         description: Found character
 *         schema:
 *           $ref: '#/definitions/Character'
 */

/**
 * @swagger
 * /characters:
 *   post:
 *     summary: Returns updated character specified by id.
 *     tags: [Characters]
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: body
 *         name: name
 *         schema:
 *           properties:
 *             name:
 *               $ref: '#/definitions/Character/properties/name'
 *             planet:
 *               $ref: '#/definitions/Character/properties/planet'
 *             episodes:
 *               $ref: '#/definitions/Character/properties/episodes'
 *     responses:
 *       201:
 *         description: Created character
 *         schema:
 *           $ref: '#/definitions/Character'
 */

/**
 * @swagger
 * /characters/{id}:
 *   patch:
 *     summary: Returns updated character specified by id.
 *     tags: [Characters]
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: path
 *         name: id
 *         description:
 *           $ref: '#/definitions/Character/properties/id/description'
 *         type:
 *           $ref: '#/definitions/Character/properties/id/type'
 *         example:
 *           $ref: '#/definitions/Character/properties/id/example'
 *       - in: body
 *         name: name
 *         schema:
 *           properties:
 *             name:
 *               $ref: '#/definitions/Character/properties/name'
 *             planet:
 *               $ref: '#/definitions/Character/properties/planet'
 *             episodes:
 *               $ref: '#/definitions/Character/properties/episodes'
 *     responses:
 *       200:
 *         description: Updated character
 *         schema:
 *           $ref: '#/definitions/Character'
 */

/**
 * @swagger
 * /characters/{id}:
 *   delete:
 *     summary: Returns deleted character specified by id.
 *     tags: [Characters]
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description:
 *           $ref: '#/definitions/Character/properties/id/description'
 *         type:
 *           $ref: '#/definitions/Character/properties/id/type'
 *         example:
 *           $ref: '#/definitions/Character/properties/id/example'
 *     responses:
 *       200:
 *         description: Removed character
 *         schema:
 *           $ref: '#/definitions/Character'
 */

/*
 * This file is part of the ZombieBox package.
 *
 * Copyright (c) 2012-2019, Interfaced
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
const AbstractAddon = require('./abstract-addon');


/**
 * @abstract
 */
class AbstractPlatform extends AbstractAddon {
	/**
	 * Build application in given dir.
	 * @abstract
	 * @param {Application} application
	 * @param {string} distDir
	 * @return {Promise<string, string>} Promise resolved with warnings or rejected with errors.
	 */
	buildApp(application, distDir) {
		throw new Error(`AbstractPlatform.buildApp is not implemented in ${this.getName()}`);
	}
}


module.exports = AbstractPlatform;
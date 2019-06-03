/*
 * This file is part of the ZombieBox package.
 *
 * Copyright (c) 2012-2019, Interfaced
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
const ISourceProvider = require('./i-source-provider');
const SourceProviderBase = require('./source-provider-base');


/**
 * @implements {ISourceProvider}
 */
class SourceProviderGroup extends SourceProviderBase {
	/**
	 * @param {...ISourceProvider} sources
	 */
	constructor(...sources) {
		super(null);

		/**
		 * @type {Array<ISourceProvider>}
		 * @protected
		 */
		this._sources = sources;

		for (const source of sources) {
			source.on(ISourceProvider.EVENT_ANY, (eventName, ...eventParams) => {
				this.emit(eventName, ...eventParams);
				this.emit(this.EVENT_ANY, eventName, ...eventParams);
			});
		}
	}

	/**
	 * @override
	 */
	ready() {
		return Promise.all(this._sources.map((sourceProvider) => sourceProvider.ready()));
	}

	/**
	 * @override
	 */
	getJSFiles() {
		return this._sources.reduce((arr, sourceProvider) => arr.concat(sourceProvider.getJSFiles()), []);
	}

	/**
	 * @override
	 */
	getCSSFiles() {
		return this._sources.reduce((arr, sourceProvider) => arr.concat(sourceProvider.getCSSFiles()), []);
	}

	/**
	 * @return {Array<string>}
	 */
	getRoots() {
		return this._sources.map((source) => source.getRoot());
	}
}


module.exports = SourceProviderGroup;
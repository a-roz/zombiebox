/*
 * This file is part of the ZombieBox package.
 *
 * Copyright © 2012-2019, Interfaced
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import Keys from '../device/input/keys';


/**
 * @interface
 */
export default class IKeyHandler {
	/**
	 * @param {Keys} zbKey
	 * @param {(KeyboardEvent|WheelEvent)=} event
	 * @return {boolean} True if Key handled, false if not
	 */
	processKey(zbKey, event) {}
}

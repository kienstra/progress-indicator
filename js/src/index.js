/**
 * WordPress dependencies
 */

import { registerBlockType } from '@wordpress/blocks';
import * as block from '../../block.json';

registerBlockType( block.name,
	{
		...block,
		edit: () => <p>This is the block</p>,
	}
);

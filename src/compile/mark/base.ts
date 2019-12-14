import {Mark} from 'vega-typings/types';
import {VgEncodeEntry, VgPostEncodingTransform} from '../../vega.schema';
import {UnitModel} from '../unit';

/**
 * Abstract interface for compiling a Vega-Lite primitive mark type.
 */
export interface MarkCompiler {
  /**
   * Underlying vega Mark type for the Vega-Lite mark.
   */
  vgMark: Mark['type'];

  encodeEntry: (model: UnitModel) => VgEncodeEntry;

  /**
   * Transform on a mark after render, used for layout and projections
   */
  postEncodingTransform?: (model: UnitModel) => VgPostEncodingTransform[];
}
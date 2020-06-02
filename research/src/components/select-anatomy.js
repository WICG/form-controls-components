/* eslint-disable */

import React from 'react'
import './anatomy.css'

const SelectAnatomy = () => {
  return (
    <div class="component-anatomy-wrapper">
      <input type="checkbox" id="show-slots" />
      <label for="show-slots"> Show slots</label>
      <div class="component-anatomy">
        <host name="select" data-slot>
          <slot name="button-wrapper" data-slot>
            <part name="button" data-slot>
              <slot name="selected-value">Currently selected value</slot>
            </part>
          </slot>
          <slot name="listbox-wrapper" data-slot>
            <part name="listbox" data-slot>
              <slot>
                <div class="element">
                  <div class="anatomy-label" name="optgroup" data-slot></div>
                  <slot>
                    <part name="option" data-slot>
                      <slot>Content</slot>
                    </part>
                  </slot>
                </div>
              </slot>
            </part>
          </slot>
        </host>
      </div>
    </div>
  )
}

export default SelectAnatomy

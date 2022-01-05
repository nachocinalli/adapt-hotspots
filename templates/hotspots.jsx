import React from 'react';
import { templates, classes, html, compile } from 'core/js/reactHelpers';

export default function Hotspots({
  onClick,
  _graphic,
  _useNumberedPins,
  _items,
  ...props
}) {

  return (
    <div className='component__inner hotspots__inner'>
      <templates.header {...props} />
      <div className='component__widget hotspots__widget'>
        <templates.image {..._graphic}
          classNamePrefixes={['hotspots__graphic']}
          attributionClassNamePrefixes={['hotspots']}
        />
        <div className='hotspots__container-items'>
          {_items.map(({ title, _pin, _top, _left, _isActive, _isVisited, _classes, _position }, _index) => (
            <div
              className={classes([
                'hotspots__item',
                _isActive && 'is-active',
                _isVisited && 'is-visited',
                _classes,
                `position-${_position}`
              ])}
              key={_index}
              data-index={_index}
              style={{ top: `${_top}%`, left: `${_left}%` }}
            >
              <button aria-describedby={`hotspots__item-title-${_index}`}
                data-index={_index}
                onClick={onClick}
                className={classes([
                  'hotspots__item-pin',
                  _useNumberedPins && 'is-numeric',
                  _pin.large && 'has-image',
                  _pin._classes
                ])}

              >
                {_pin.large &&
                    <templates.image {..._pin}
                      classNamePrefixes={['hotspots__pin']}
                      attributionClassNamePrefixes={['hotspots']}
                    />
                }
                {_useNumberedPins && <div>{_index + 1}</div>}
              </button>

              <div id={`hotspots__item-title-${_index}`} className='hotspots__item-title' role='tooltip'>
                {html(compile(title))}

              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

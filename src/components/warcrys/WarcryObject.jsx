import React from 'react';
import PropTypes from 'prop-types';

export default function WarcryObject({ data }) {
  const { id, attack, spellType, targetingArrowText } = data;
  return (
    <div data-file="warcrys/WarcryObject" className={'warcry-object'}>
      <div className={'warcry__object__ring'} />
      <div className={'warcry__object__content'}>
        <div className={'warcry-object-label'}>Targeted Warcry Spell</div>
        <div className={'warcry-object-text'}>{targetingArrowText}</div>
      </div>
      <meta name="id" content={id} />
      <meta name="attack" content={attack} />
      <meta name="spellType" content={spellType} />
      <meta name="targetingArrowText" content={targetingArrowText} />
    </div>
  );
}

WarcryObject.propTypes = {
  data: PropTypes.object
};

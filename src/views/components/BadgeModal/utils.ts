import {Badge} from '../../../redux/auth/entities';
import {badgeColors} from '../../../constants';

export const roundBadgeValue = (
  badge: Badge & {value: number},
  maximum: string,
) => {
  switch (badge.name) {
    case 'rank':
      return badge.value >= +badge.gold ? +maximum : badge.value;
    default:
      return badge.value >= +maximum ? +maximum : badge.value;
  }
};

export const renderBadgeValues = (badge: Badge) => [
  {
    ...badgeColors.bronze,
    value: badge.bronze,
  },
  {
    ...badgeColors.silver,
    value: badge.silver,
  },
  {
    ...badgeColors.gold,
    value: badge.gold,
  },
];

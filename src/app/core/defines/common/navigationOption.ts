import Option from 'app/core/model/option';
import { NavigationTextEnum, NavigationValuesEnum } from 'app/core/enum';

export const NavigationOption: Option[] = [
  { text: NavigationTextEnum.Home, value: NavigationValuesEnum.Home },
  { text: NavigationTextEnum.Continent, value: NavigationValuesEnum.Continent },
  { text: NavigationTextEnum.Country, value: NavigationValuesEnum.Country }
]
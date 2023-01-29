import { GetV3Covid19ContinentsResp } from 'app/api/model/get/getV3Covid19Continents';

export interface ContinentProps {
  continent: GetV3Covid19ContinentsResp[];
}

export interface BarChartData {
  type: string;
  data: number[];
}

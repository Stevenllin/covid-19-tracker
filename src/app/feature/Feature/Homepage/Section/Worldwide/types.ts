// import { GetV3Covid19AllResp } from 'app/api/model/get/getV3Covid19All';
import { CasesDeathsRecoveredData } from '../../types';

export interface WorldwideProps {
  worldwide: CasesDeathsRecoveredData[] | undefined;
}

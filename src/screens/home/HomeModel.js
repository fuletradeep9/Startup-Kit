import { useDispatch, useSelector } from 'react-redux';
import { AppStackC } from '@app/constants/navigation';
import { useNavigation } from '@react-navigation/native';
import { toastr } from '@app/components/common/ToastComponent';

export function useHomeModel() {
  const dispatch = useDispatch();
  const navigation = useNavigation()


  const onHeaderBtnPress = () => {
    toastr.showToast('success','This is Toast')
  }

  return {
    onHeaderBtnPress,
  };
}

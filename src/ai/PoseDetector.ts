import {store} from '../index';
import {updatePoseDetectorStatus} from '../store/ai/actionCreators';
import {AIPoseDetectionActions} from '../logic/actions/AIPoseDetectionActions';
import {LabelType} from '../data/enums/LabelType';
import {LabelsSelector} from '../store/selectors/LabelsSelector';
import {updateActiveLabelType} from '../store/labels/actionCreators';
import {submitNewNotification} from '../store/notifications/actionCreators';
import {NotificationUtil} from '../utils/NotificationUtil';
import {NotificationsDataMap} from '../data/info/NotificationsData';
import {Notification} from '../data/enums/Notification';

export class PoseDetector {
    public static loadModel(callback?: () => unknown) {
        callback?.()
    }

    public static predict(
        // image: HTMLImageElement, callback?: (predictions: Pose[]) => unknown
    ) {
        return
    }
}

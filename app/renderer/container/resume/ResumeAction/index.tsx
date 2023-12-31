import React from 'react';
import './index.less';
import { useHistory } from 'react-router';
import ROUTER from '@common/constants/router';
import MyButton from '@common/components/MyButton';

function ResumeAction() {
    const history = useHistory();
    const onBack = () => history.push(ROUTER.root);
    const onExport = () => {};
    return (
        <div styleName="actions">
            <div styleName="back" onClick={onBack}>返回</div>
            <MyButton size="middle" className="export-btn" onClick={onExport}>导出PDF</MyButton>
        </div>
    )
}
export default ResumeAction;
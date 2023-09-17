import {CSSProperties, useState} from 'react';
import './Login.scss'
import {
    AlipayCircleOutlined, TaobaoCircleOutlined, WeiboCircleOutlined,
    LockOutlined, UserOutlined, MobileOutlined
} from '@ant-design/icons';

import './Login.scss';
import {LoginForm, ProFormCaptcha, ProFormText} from "@ant-design/pro-components";
import {message, Space, Tabs} from "antd";


const iconStyles: CSSProperties = {
    marginLeft: '16px',
    color: 'rgba(0, 0, 0, 0.2)',
    fontSize: '24px',
    verticalAlign: 'middle',
    cursor: 'pointer',
};

class LoginType {
    static readonly PHONE = 'phone';
    static readonly ACCOUNT = 'account';
}

const Login = () => {
    const [loginType, setLoginType] = useState<LoginType>('phone');
    // 只有通过校验之后才会触发这个方法
    const onSubmit = async (values: any) => {
        console.log(values);
    };
    const onFocus = () => {
        console.log("变化");
    };
    return (
        <div className='login_con'>
            <LoginForm
                onFinish={onSubmit}
                onFocus={onFocus}

                className='login_from'
                logo="https://github.githubassets.com/images/modules/logos_page/Octocat.png"
                title="Github"
                subTitle="全球最大同性交友网站"
                actions={
                    <Space>
                        其他登录方式
                        <AlipayCircleOutlined style={iconStyles}/>
                        <TaobaoCircleOutlined style={iconStyles}/>
                        <WeiboCircleOutlined style={iconStyles}/>
                    </Space>
                }
            >
                <Tabs activeKey={loginType} onChange={(activeKey) => setLoginType(activeKey as LoginType)}>
                    <Tabs.TabPane key={'account'} tab={'账号密码登录'}/>
                    <Tabs.TabPane key={'phone'} tab={'手机号登录'}/>
                </Tabs>
                {loginType === 'account' && (
                    <>
                        <ProFormText
                            name="username"
                            fieldProps={{
                                size: 'large',
                                prefix: <UserOutlined className={'prefixIcon'}/>,
                            }}
                            placeholder={'用户名: 000'}
                            rules={[
                                {
                                    required: true,
                                    message: '请输入用户名!',
                                },
                            ]}
                        />
                        <ProFormText.Password
                            name="password"
                            fieldProps={{
                                size: 'large',
                                prefix: <LockOutlined className={'prefixIcon'}/>,
                            }}
                            placeholder={'密码: 00'}
                            rules={[
                                {
                                    required: true,
                                    message: '请输入密码！',
                                },
                            ]}
                        />
                    </>
                )}
                {loginType === 'phone' && (
                    <>
                        <ProFormText
                            fieldProps={{
                                size: 'large',
                                prefix: <MobileOutlined className={'prefixIcon'}/>,
                            }}
                            name="mobile"
                            placeholder={'手机号'}
                            rules={[
                                {
                                    required: true,
                                    message: '请输入手机号！',
                                },
                                {
                                    pattern: /^1\d{10}$/,
                                    message: '手机号格式错误！',
                                },
                            ]}
                        />
                        <ProFormCaptcha
                            fieldProps={{
                                size: 'large',
                                prefix: <LockOutlined className={'prefixIcon'}/>,
                            }}
                            captchaProps={{
                                size: 'large',
                            }}
                            placeholder={'请输入验证码'}
                            captchaTextRender={(timing, count) => {
                                if (timing) {
                                    return `${count} ${'获取验证码'}`;
                                }
                                return '获取验证码';
                            }}
                            name="captcha"
                            rules={[
                                {
                                    required: true,
                                    message: '请输入验证码！',
                                },
                            ]}
                            onGetCaptcha={async () => {
                                message.success('获取验证码成功！验证码为：1234');
                            }}
                        />
                    </>
                )}
                {/* <div
          style={{
            marginBottom: 24,
          }}
        >
          <ProFormCheckbox noStyle name="autoLogin">
            自动登录
          </ProFormCheckbox>
          <a
            style={{
              float: 'right',
            }}
          >
            忘记密码
          </a>
        </div> */}
            </LoginForm>
        </div>
    );
};


export default Login;

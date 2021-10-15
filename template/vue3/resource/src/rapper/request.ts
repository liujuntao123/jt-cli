/* md5: ee47541a015865491b8a2c3bb789c195 */
/* Rap仓库id: 288321 */
/* Rapper版本: 1.2.2 */
/* eslint-disable */
/* tslint:disable */
// @ts-nocheck

/**
 * 本文件由 Rapper 同步 Rap 平台接口，自动生成，请勿修改
 * Rap仓库 地址: http://rap2.taobao.org/repository/editor?id=288321
 */

import * as commonLib from 'rap/runtime/commonLib'

export interface IModels {
  /**
   * 接口名：批量创建用户
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=476274&itf=2073033
   */
  'POST/keycloak/back/user/batchcreate': {
    Req: {}
    Res: {
      /**
       * 返回数据
       */
      body: any[]
      /**
       * 错误码，有错误时返回
       */
      errorCode: string
      /**
       * 错误信息，有错误时返回
       */
      errorMessage: string
      /**
       * 错误参数，统一错误码的自定义参数
       */
      errorParams: any[]
      /**
       * requestId，请求唯一标识
       */
      requestId: string
      /**
       * 返回状态|枚举值: OK,ERROR,EXCEPTION,FORBIDDEN
       */
      state: string
    }
  }

  /**
   * 接口名：查询用户总人数
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=476274&itf=2079712
   */
  'GET/keycloak/web/user/count': {
    Req: {}
    Res: {
      /**
       * 返回数据
       */
      body: number
      /**
       * 错误码，有错误时返回
       */
      errorCode: string
      /**
       * 错误信息，有错误时返回
       */
      errorMessage: string
      /**
       * 错误参数，统一错误码的自定义参数
       */
      errorParams: any[]
      /**
       * requestId，请求唯一标识
       */
      requestId: string
      /**
       * 返回状态|枚举值: OK,ERROR,EXCEPTION,FORBIDDEN
       */
      state: string
    }
  }

  /**
   * 接口名：查看用户是否存在
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=476274&itf=2073034
   */
  'POST/keycloak/back/user/checkuser': {
    Req: {
      /**
       * 电话号码
       */
      phoneNum: string
      /**
       * 学生学号
       */
      stuNum?: string
      /**
       * 用户ID
       */
      userId?: string
      /**
       * 用户名称
       */
      userName?: string
    }
    Res: {
      /**
       * 返回数据
       */
      body: boolean
      /**
       * 错误码，有错误时返回
       */
      errorCode: string
      /**
       * 错误信息，有错误时返回
       */
      errorMessage: string
      /**
       * 错误参数，统一错误码的自定义参数
       */
      errorParams: any[]
      /**
       * requestId，请求唯一标识
       */
      requestId: string
      /**
       * 返回状态|枚举值: OK,ERROR,EXCEPTION,FORBIDDEN
       */
      state: string
    }
  }

  /**
   * 接口名：批量导入用户
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=476274&itf=2079713
   */
  'POST/keycloak/web/user/uploadUsers': {
    Req: {
      /**
       * file
       */
      file: null
    }
    Res: {
      /**
       * 返回数据
       */
      body: {}
      /**
       * 错误码，有错误时返回
       */
      errorCode: string
      /**
       * 错误信息，有错误时返回
       */
      errorMessage: string
      /**
       * 错误参数，统一错误码的自定义参数
       */
      errorParams: any[]
      /**
       * requestId，请求唯一标识
       */
      requestId: string
      /**
       * 返回状态|枚举值: OK,ERROR,EXCEPTION,FORBIDDEN
       */
      state: string
    }
  }

  /**
   * 接口名：检查用户信息
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=476274&itf=2073035
   */
  'POST/keycloak/back/user/checkusers': {
    Req: {}
    Res: {
      /**
       * 返回数据
       */
      body: {
        /**
         * 电话号码
         */
        phoneNum: string
        /**
         * 学生学号
         */
        stuNum: string
        /**
         * 用户ID
         */
        userId: string
        /**
         * 用户名称
         */
        userName: string
      }[]
      /**
       * 错误码，有错误时返回
       */
      errorCode: string
      /**
       * 错误信息，有错误时返回
       */
      errorMessage: string
      /**
       * 错误参数，统一错误码的自定义参数
       */
      errorParams: any[]
      /**
       * requestId，请求唯一标识
       */
      requestId: string
      /**
       * 返回状态|枚举值: OK,ERROR,EXCEPTION,FORBIDDEN
       */
      state: string
    }
  }

  /**
   * 接口名：创建用户
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=476274&itf=2073036
   */
  'POST/keycloak/back/user/create': {
    Req: {
      /**
       * 开课权限
       */
      classAllow?: string
      /**
       * 邮箱
       */
      email?: string
      errs?: string
      /**
       * 学院
       */
      faculty?: string
      /**
       * 一级组织
       */
      firstGroup?: string
      /**
       * 四级组织
       */
      fourthGroup?: string
      /**
       * 姓名
       */
      fullName?: string
      /**
       * 身份
       */
      identity?: string
      /**
       * 简介
       */
      introduction?: string
      /**
       * 专业
       */
      major?: string
      /**
       * 密码
       */
      password?: string
      /**
       * 电话
       */
      phoneNum?: string
      /**
       * 学校
       */
      school?: string
      /**
       * 二级组织
       */
      secondGroup?: string
      /**
       * 学号
       */
      stuNum?: string
      /**
       * 三级组织
       */
      thirdGroup?: string
      /**
       * 用户名
       */
      userName?: string
    }
    Res: {
      /**
       * 返回数据
       */
      body: {}
      /**
       * 错误码，有错误时返回
       */
      errorCode: string
      /**
       * 错误信息，有错误时返回
       */
      errorMessage: string
      /**
       * 错误参数，统一错误码的自定义参数
       */
      errorParams: any[]
      /**
       * requestId，请求唯一标识
       */
      requestId: string
      /**
       * 返回状态|枚举值: OK,ERROR,EXCEPTION,FORBIDDEN
       */
      state: string
    }
  }

  /**
   * 接口名：查看用户登录状态
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=476274&itf=2073037
   */
  'GET/keycloak/back/user/getloginstatus': {
    Req: {
      /**
       * groupName
       */
      groupName: string
    }
    Res: {
      /**
       * 返回数据
       */
      body: {
        /**
         * 登录时间
         */
        loginTime: string
        /**
         * 登录状态
         */
        status: boolean
        /**
         * 用户ID
         */
        userId: string
        /**
         * 用户名称
         */
        userName: string
      }[]
      /**
       * 错误码，有错误时返回
       */
      errorCode: string
      /**
       * 错误信息，有错误时返回
       */
      errorMessage: string
      /**
       * 错误参数，统一错误码的自定义参数
       */
      errorParams: any[]
      /**
       * requestId，请求唯一标识
       */
      requestId: string
      /**
       * 返回状态|枚举值: OK,ERROR,EXCEPTION,FORBIDDEN
       */
      state: string
    }
  }

  /**
   * 接口名：查询用户信息
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=476274&itf=2073038
   */
  'GET/keycloak/back/user/getuser': {
    Req: {
      /**
       * id
       */
      id: string
    }
    Res: {
      /**
       * 返回数据
       */
      body: {
        /**
         * 验证码
         */
        code: string
        /**
         * 学院
         */
        faculty: string
        /**
         * 邮件
         */
        email: string
        /**
         * 姓名
         */
        fullName: string
        /**
         * 邮件是否认证
         */
        emailChecked: boolean
        /**
         * 组织
         */
        group: string
        /**
         * 组织路径
         */
        groupPath: string
        /**
         * Id
         */
        id: string
        /**
         * 身份
         */
        identity: string
        /**
         * 头像
         */
        image: string
        /**
         * 专业
         */
        major: string
        /**
         * 简介
         */
        introduction: string
        /**
         * 学校
         */
        school: string
        /**
         * 电话号码
         */
        phoneNum: string
        /**
         * 用户名
         */
        userName: string
        /**
         * 学号
         */
        stuNum: string
      }
      /**
       * 错误码，有错误时返回
       */
      errorCode: string
      /**
       * 错误信息，有错误时返回
       */
      errorMessage: string
      /**
       * 错误参数，统一错误码的自定义参数
       */
      errorParams: any[]
      /**
       * requestId，请求唯一标识
       */
      requestId: string
      /**
       * 返回状态|枚举值: OK,ERROR,EXCEPTION,FORBIDDEN
       */
      state: string
    }
  }

  /**
   * 接口名：批量查询用户信息
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=476274&itf=2073039
   */
  'POST/keycloak/back/user/getusers': {
    Req: {}
    Res: {
      /**
       * 返回数据
       */
      body: {
        /**
         * 验证码
         */
        code: string
        /**
         * 组织路径
         */
        groupPath: string
        /**
         * 姓名
         */
        fullName: string
        /**
         * 组织
         */
        group: string
        /**
         * 学院
         */
        faculty: string
        /**
         * 电话号码
         */
        phoneNum: string
        /**
         * 学号
         */
        stuNum: string
        /**
         * 邮件是否认证
         */
        emailChecked: boolean
        /**
         * 专业
         */
        major: string
        /**
         * 简介
         */
        introduction: string
        /**
         * 邮件
         */
        email: string
        /**
         * 头像
         */
        image: string
        /**
         * Id
         */
        id: string
        /**
         * 身份
         */
        identity: string
        /**
         * 学校
         */
        school: string
        /**
         * 用户名
         */
        userName: string
      }[]
      /**
       * 错误码，有错误时返回
       */
      errorCode: string
      /**
       * 错误信息，有错误时返回
       */
      errorMessage: string
      /**
       * 错误参数，统一错误码的自定义参数
       */
      errorParams: any[]
      /**
       * requestId，请求唯一标识
       */
      requestId: string
      /**
       * 返回状态|枚举值: OK,ERROR,EXCEPTION,FORBIDDEN
       */
      state: string
    }
  }

  /**
   * 接口名：注册用户
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=476274&itf=2073040
   */
  'POST/keycloak/back/user/regist': {
    Req: {
      /**
       * 邮箱
       */
      email?: string
      /**
       * 姓名
       */
      fullName?: string
      /**
       * 组织
       */
      group?: string
      /**
       * 身份
       */
      identity?: string
      /**
       * 密码
       */
      password?: string
      /**
       * 电话
       */
      phoneNum: string
      /**
       * 用户名
       */
      userName: string
    }
    Res: {
      /**
       * 返回数据
       */
      body: string
      /**
       * 错误码，有错误时返回
       */
      errorCode: string
      /**
       * 错误信息，有错误时返回
       */
      errorMessage: string
      /**
       * 错误参数，统一错误码的自定义参数
       */
      errorParams: any[]
      /**
       * requestId，请求唯一标识
       */
      requestId: string
      /**
       * 返回状态|枚举值: OK,ERROR,EXCEPTION,FORBIDDEN
       */
      state: string
    }
  }

  /**
   * 接口名：学习人数
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=476274&itf=2073041
   */
  'GET/keycloak/web/user/countuser': {
    Req: {}
    Res: {
      /**
       * 返回数据
       */
      body: number
      /**
       * 错误码，有错误时返回
       */
      errorCode: string
      /**
       * 错误信息，有错误时返回
       */
      errorMessage: string
      /**
       * 错误参数，统一错误码的自定义参数
       */
      errorParams: any[]
      /**
       * requestId，请求唯一标识
       */
      requestId: string
      /**
       * 返回状态|枚举值: OK,ERROR,EXCEPTION,FORBIDDEN
       */
      state: string
    }
  }

  /**
   * 接口名：验证第一次登录
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=476274&itf=2073042
   */
  'GET/keycloak/web/user/firstlogin': {
    Req: {}
    Res: {
      /**
       * 返回数据
       */
      body: boolean
      /**
       * 错误码，有错误时返回
       */
      errorCode: string
      /**
       * 错误信息，有错误时返回
       */
      errorMessage: string
      /**
       * 错误参数，统一错误码的自定义参数
       */
      errorParams: any[]
      /**
       * requestId，请求唯一标识
       */
      requestId: string
      /**
       * 返回状态|枚举值: OK,ERROR,EXCEPTION,FORBIDDEN
       */
      state: string
    }
  }

  /**
   * 接口名：查询用户信息
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=476274&itf=2073043
   */
  'GET/keycloak/web/user/getuserinfo': {
    Req: {}
    Res: {
      /**
       * 返回数据
       */
      body: {
        /**
         * 验证码
         */
        code: string
        /**
         * 邮件
         */
        email: string
        /**
         * 邮件是否认证
         */
        emailChecked: boolean
        /**
         * 学院
         */
        faculty: string
        /**
         * Id
         */
        id: string
        /**
         * 姓名
         */
        fullName: string
        /**
         * 头像
         */
        image: string
        /**
         * 身份
         */
        identity: string
        /**
         * 组织路径
         */
        groupPath: string
        /**
         * 组织
         */
        group: string
        /**
         * 简介
         */
        introduction: string
        /**
         * 电话号码
         */
        phoneNum: string
        /**
         * 学校
         */
        school: string
        /**
         * 学号
         */
        stuNum: string
        /**
         * 专业
         */
        major: string
        /**
         * 用户名
         */
        userName: string
      }
      /**
       * 错误码，有错误时返回
       */
      errorCode: string
      /**
       * 错误信息，有错误时返回
       */
      errorMessage: string
      /**
       * 错误参数，统一错误码的自定义参数
       */
      errorParams: any[]
      /**
       * requestId，请求唯一标识
       */
      requestId: string
      /**
       * 返回状态|枚举值: OK,ERROR,EXCEPTION,FORBIDDEN
       */
      state: string
    }
  }

  /**
   * 接口名：修改密码
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=476274&itf=2073044
   */
  'POST/keycloak/web/user/resetpassword': {
    Req: {
      /**
       * verification Code
       */
      code?: string
      /**
       * confirm Password
       */
      confirmPassword?: string
      /**
       * new Password
       */
      newPassword?: string
      /**
       * old Password
       */
      oldPassword?: string
      /**
       * password Type
       */
      passwordType?: string
    }
    Res: {
      /**
       * 返回数据
       */
      body: {}
      /**
       * 错误码，有错误时返回
       */
      errorCode: string
      /**
       * 错误信息，有错误时返回
       */
      errorMessage: string
      /**
       * 错误参数，统一错误码的自定义参数
       */
      errorParams: any[]
      /**
       * requestId，请求唯一标识
       */
      requestId: string
      /**
       * 返回状态|枚举值: OK,ERROR,EXCEPTION,FORBIDDEN
       */
      state: string
    }
  }

  /**
   * 接口名：修改用户信息
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=476274&itf=2073045
   */
  'POST/keycloak/web/user/updateuser': {
    Req: {
      /**
       * 验证码
       */
      code?: string
      /**
       * 邮件
       */
      email?: string
      /**
       * 邮件是否认证
       */
      emailChecked?: boolean
      /**
       * 学院
       */
      faculty?: string
      /**
       * 姓名
       */
      fullName?: string
      /**
       * 组织
       */
      group?: string
      /**
       * 组织路径
       */
      groupPath?: string
      /**
       * Id
       */
      id?: string
      /**
       * 身份
       */
      identity?: string
      /**
       * 头像
       */
      image?: string
      /**
       * 简介
       */
      introduction?: string
      /**
       * 专业
       */
      major?: string
      /**
       * 电话号码
       */
      phoneNum?: string
      /**
       * 学校
       */
      school?: string
      /**
       * 学号
       */
      stuNum?: string
      /**
       * 用户名
       */
      userName?: string
    }
    Res: {
      /**
       * 返回数据
       */
      body: {}
      /**
       * 错误码，有错误时返回
       */
      errorCode: string
      /**
       * 错误信息，有错误时返回
       */
      errorMessage: string
      /**
       * 错误参数，统一错误码的自定义参数
       */
      errorParams: any[]
      /**
       * requestId，请求唯一标识
       */
      requestId: string
      /**
       * 返回状态|枚举值: OK,ERROR,EXCEPTION,FORBIDDEN
       */
      state: string
    }
  }

  /**
   * 接口名：邮件详情
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=479626&itf=2091669
   */
  'GET/examination/email/detail': {
    Req: {
      /**
       * emailbatch
       */
      emailbatch: string
      /**
       * keyword
       */
      keyword?: string
      /**
       * pageNum
       */
      pageNum?: number
      /**
       * pageSize
       */
      pageSize?: number
    }
    Res: {
      /**
       * 返回数据
       */
      body: {}
      /**
       * 错误码，有错误时返回
       */
      errorCode: string
      /**
       * 错误信息，有错误时返回
       */
      errorMessage: string
      /**
       * 错误参数，统一错误码的自定义参数
       */
      errorParams: any[]
      /**
       * requestId，请求唯一标识
       */
      requestId: string
      /**
       * 返回状态|枚举值: OK,ERROR,EXCEPTION,FORBIDDEN
       */
      state: string
    }
  }

  /**
   * 接口名：邮件记录
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=479626&itf=2091670
   */
  'GET/examination/email/list': {
    Req: {
      /**
       * pageNum
       */
      pageNum?: number
      /**
       * pageSize
       */
      pageSize?: number
      /**
       * paperName
       */
      paperName: string
    }
    Res: {
      /**
       * 返回数据
       */
      body: {}
      /**
       * 错误码，有错误时返回
       */
      errorCode: string
      /**
       * 错误信息，有错误时返回
       */
      errorMessage: string
      /**
       * 错误参数，统一错误码的自定义参数
       */
      errorParams: any[]
      /**
       * requestId，请求唯一标识
       */
      requestId: string
      /**
       * 返回状态|枚举值: OK,ERROR,EXCEPTION,FORBIDDEN
       */
      state: string
    }
  }

  /**
   * 接口名：扫描定时任务是否有漏，如果有漏则自动补充话单
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=479932&itf=2093229
   */
  'GET/opera/back/opera/isTaskAllReady': {
    Req: {
      /**
       * task|枚举值: resourceBill,storageBill,computePowerSummaryHour,computePowerSummaryDay,computerPowerSummaryWeek,instanceSummaryHour,instanceSummaryDay,instanceSummaryWeek,accountBill,cumulativeDurationSummaryHour,cumulativeDurationSummaryDay,cumulativeDurationSummaryWeek
       */
      task: string
    }
    Res: {
      /**
       * 返回数据
       */
      body: boolean
      /**
       * 错误码，有错误时返回
       */
      errorCode: string
      /**
       * 错误信息，有错误时返回
       */
      errorMessage: string
      /**
       * 错误参数，统一错误码的自定义参数
       */
      errorParams: any[]
      /**
       * requestId，请求唯一标识
       */
      requestId: string
      /**
       * 返回状态|枚举值: OK,ERROR,EXCEPTION,FORBIDDEN
       */
      state: string
    }
  }

  /**
   * 接口名：资源微服务详单查询接口
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=479932&itf=2093230
   */
  'GET/opera/back/resource/bills': {
    Req: {
      /**
       * beginTime
       */
      beginTime?: string
      /**
       * endTime
       */
      endTime?: string
      /**
       * requestId
       */
      requestId?: string
    }
    Res: {
      /**
       * 返回数据
       */
      body: {
        /**
         * 周期开始时间 (yyyy-MM-dd HH:mm:ss) GMT+8
         */
        beginTime: string
        /**
         * 主键ID
         */
        id: number
        /**
         * 周期结束时间 (yyyy-MM-dd HH:mm:ss) GMT+8
         */
        endTime: string
        /**
         * 实例的开始时间 (yyyy-MM-dd HH:mm:ss) GMT+8
         */
        instanceBeginTime: string
        /**
         * 实例的结束时间 (yyyy-MM-dd HH:mm:ss) GMT+8
         */
        instanceEndTime: string
        /**
         * 实例名称
         */
        instanceName: string
        /**
         * 实例Id
         */
        instanceId: string
        /**
         * 规格
         */
        spec: string
        /**
         * 使用量，单位秒
         */
        total: number
        /**
         * 模块 0-课程，1-竞赛，2-数据集，3-求职，4-模型
         */
        module: number
        /**
         * 用户ID
         */
        userId: string
        /**
         * 模块名称
         */
        moduleName: string
        /**
         * 用户组
         */
        userGroup: string
      }[]
      /**
       * 错误码，有错误时返回
       */
      errorCode: string
      /**
       * 错误信息，有错误时返回
       */
      errorMessage: string
      /**
       * 错误参数，统一错误码的自定义参数
       */
      errorParams: any[]
      /**
       * requestId，请求唯一标识
       */
      requestId: string
      /**
       * 返回状态|枚举值: OK,ERROR,EXCEPTION,FORBIDDEN
       */
      state: string
    }
  }

  /**
   * 接口名：算力统计接口
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=479292&itf=2089904
   */
  'GET/opera/web/computePower/summary': {
    Req: {
      /**
       * 统计的开始时间，只有分钟级可不传
       */
      beginTime?: string
      /**
       * 时间维度,支持分钟，小时，天和周
       */
      dimension?: null
      /**
       * 统计的结束时间，只有分钟级可不传
       */
      endTime?: string
      /**
       * requestId
       */
      requestId?: string
      /**
       * 显示规则，对分钟级无效
       */
      summaryRule?: null
    }
    Res: {
      /**
       * 返回数据
       */
      body: {
        /**
         * 统计开始时间 (yyyy-MM-dd HH:mm:ss) GMT+8
         */
        beginTime: string
        /**
         * CPU值
         */
        cpu: number
        /**
         * 统计结束时间 (yyyy-MM-dd HH:mm:ss) GMT+8
         */
        endTime: string
        /**
         * 转化后的时间
         */
        formatTime: string
        /**
         * 类别|数据范围: 最小值：-128
         */
        summaryType: number
        /**
         * GPU值
         */
        gpu: number
        /**
         * VGPU值
         */
        vgpu: number
      }[]
      /**
       * 错误码，有错误时返回
       */
      errorCode: string
      /**
       * 错误信息，有错误时返回
       */
      errorMessage: string
      /**
       * 错误参数，统一错误码的自定义参数
       */
      errorParams: any[]
      /**
       * requestId，请求唯一标识
       */
      requestId: string
      /**
       * 返回状态|枚举值: OK,ERROR,EXCEPTION,FORBIDDEN
       */
      state: string
    }
  }

  /**
   * 接口名：累计时长统计接口
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=479292&itf=2089905
   */
  'GET/opera/web/cumulativeDuration/summary': {
    Req: {
      /**
       * 统计的开始时间，只有分钟级可不传
       */
      beginTime?: string
      /**
       * 时间维度
       */
      dimension?: null
      /**
       * 统计的结束时间，只有分钟级可不传
       */
      endTime?: string
      /**
       * requestId
       */
      requestId?: string
    }
    Res: {
      /**
       * 返回数据
       */
      body: {
        /**
         * 统计结束时间 (yyyy-MM-dd HH:mm:ss) GMT+8
         */
        endTime: string
        /**
         * 统计开始时间 (yyyy-MM-dd HH:mm:ss) GMT+8
         */
        beginTime: string
        /**
         * cpu实例时长
         */
        cpuDuration: number
        /**
         * 算力豆实际使用量
         */
        consumedCount: number
        /**
         * 转化后的时间
         */
        formatTime: string
        /**
         * gpu实例时长
         */
        gpuDuration: number
        /**
         * 类别, 小时，天，周, 月|数据范围: 最小值：-128
         */
        summaryType: number
        /**
         * vgpu实例时长
         */
        vgpuDuration: number
      }[]
      /**
       * 错误码，有错误时返回
       */
      errorCode: string
      /**
       * 错误信息，有错误时返回
       */
      errorMessage: string
      /**
       * 错误参数，统一错误码的自定义参数
       */
      errorParams: any[]
      /**
       * requestId，请求唯一标识
       */
      requestId: string
      /**
       * 返回状态|枚举值: OK,ERROR,EXCEPTION,FORBIDDEN
       */
      state: string
    }
  }

  /**
   * 接口名：获取统计的开始时间
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=479292&itf=2093232
   */
  'GET/opera/web/opera/statistics/info': {
    Req: {
      /**
       * requestId
       */
      requestId?: string
    }
    Res: {
      /**
       * 返回数据
       */
      body: {
        /**
         * 统计的开始时间，毫秒数时间戳
         */
        statisticBeginTime: number
      }
      /**
       * 错误码，有错误时返回
       */
      errorCode: string
      /**
       * 错误信息，有错误时返回
       */
      errorMessage: string
      /**
       * 错误参数，统一错误码的自定义参数
       */
      errorParams: any[]
      /**
       * requestId，请求唯一标识
       */
      requestId: string
      /**
       * 返回状态|枚举值: OK,ERROR,EXCEPTION,FORBIDDEN
       */
      state: string
    }
  }

  /**
   * 接口名：实例统计接口
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=479292&itf=2089906
   */
  'GET/opera/web/instance/summary': {
    Req: {
      /**
       * 统计的开始时间，只有分钟级可不传
       */
      beginTime?: string
      /**
       * 时间维度,支持分钟，小时，天和周
       */
      dimension?: null
      /**
       * 统计的结束时间，只有分钟级可不传
       */
      endTime?: string
      /**
       * requestId
       */
      requestId?: string
      /**
       * 显示规则，对分钟级无效
       */
      summaryRule?: null
    }
    Res: {
      /**
       * 返回数据
       */
      body: {
        /**
         * 统计开始时间 (yyyy-MM-dd HH:mm:ss) GMT+8
         */
        beginTime: string
        /**
         * 学习实例数峰值
         */
        course: number
        /**
         * 转化后的时间
         */
        formatTime: string
        /**
         * 实例总和
         */
        total: number
        /**
         * 类别，分钟，小时，天，周|数据范围: 最小值：-128
         */
        summaryType: number
        /**
         * 统计结束时间 (yyyy-MM-dd HH:mm:ss) GMT+8
         */
        endTime: string
        /**
         * 建模实例数峰值
         */
        model: number
        /**
         * 求职实例数峰值
         */
        job: number
        /**
         * 比赛实例数峰值
         */
        competition: number
      }[]
      /**
       * 错误码，有错误时返回
       */
      errorCode: string
      /**
       * 错误信息，有错误时返回
       */
      errorMessage: string
      /**
       * 错误参数，统一错误码的自定义参数
       */
      errorParams: any[]
      /**
       * requestId，请求唯一标识
       */
      requestId: string
      /**
       * 返回状态|枚举值: OK,ERROR,EXCEPTION,FORBIDDEN
       */
      state: string
    }
  }

  /**
   * 接口名：累计使用情况汇总
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=479292&itf=2089907
   */
  'GET/opera/web/opera/summary': {
    Req: {
      /**
       * requestId
       */
      requestId?: string
    }
    Res: {
      /**
       * 返回数据
       */
      body: {
        /**
         * 算力豆实际使用量
         */
        consumedCount: number
        /**
         * gpu累计使用时长
         */
        gpuDuration: number
        /**
         * vGpu累计使用时长
         */
        vgpuDuration: number
        /**
         * 创建实例数
         */
        instanceCount: number
        /**
         * cpu累计使用时长
         */
        cpuDuration: number
      }
      /**
       * 错误码，有错误时返回
       */
      errorCode: string
      /**
       * 错误信息，有错误时返回
       */
      errorMessage: string
      /**
       * 错误参数，统一错误码的自定义参数
       */
      errorParams: any[]
      /**
       * requestId，请求唯一标识
       */
      requestId: string
      /**
       * 返回状态|枚举值: OK,ERROR,EXCEPTION,FORBIDDEN
       */
      state: string
    }
  }

  /**
   * 接口名：存储统计接口
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=479292&itf=2089908
   */
  'GET/opera/web/storage/summary': {
    Req: {
      /**
       * requestId
       */
      requestId?: string
    }
    Res: {
      /**
       * 返回数据
       */
      body: {
        /**
         * 存储占50%到70%数量
         */
        fiftyToSeventy: number
        /**
         * 存储占80%-90%数量
         */
        eightyToNinety: number
        /**
         * 存储占90%以上数量
         */
        moreNinety: number
        /**
         * 存储占百分之五十以下数量
         */
        lessFifty: number
        /**
         * 存储占70%-80%数量
         */
        seventyToEighty: number
      }
      /**
       * 错误码，有错误时返回
       */
      errorCode: string
      /**
       * 错误信息，有错误时返回
       */
      errorMessage: string
      /**
       * 错误参数，统一错误码的自定义参数
       */
      errorParams: any[]
      /**
       * requestId，请求唯一标识
       */
      requestId: string
      /**
       * 返回状态|枚举值: OK,ERROR,EXCEPTION,FORBIDDEN
       */
      state: string
    }
  }

  /**
   * 接口名：存储占用情况详细
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=479292&itf=2089909
   */
  'POST/opera/web/storage/userDetail': {
    Req: {
      /**
       * 查询的存储占用量开始百分比（包含）
       */
      from?: number
      /**
       * 分页参数，页数，从1开始
       */
      pageNum?: number
      /**
       * 分页参数，每页条数
       */
      pageSize?: number
      /**
       * 查询的存储占用量结束百分比（不含），可不传标识到最大
       */
      to?: number
      /**
       * requestId
       */
      requestId?: string
    }
    Res: {
      /**
       * 返回数据
       */
      body: {
        /**
         * 分页后数据列表
         */
        data: {
          /**
           * 所属组织
           */
          group: string
          /**
           * 姓名
           */
          fullName: string
          /**
           * 百分比
           */
          percent: number
          /**
           * 配额
           */
          storage: number
          /**
           * 用户ID
           */
          id: string
          /**
           * 存储占用
           */
          used: number
          /**
           * 用户名
           */
          userName: string
        }[]
        /**
         * 分页参数，每页条数
         */
        pageSize: number
        /**
         * 分页参数，页数，从1开始
         */
        pageNum: number
        /**
         * 数据总量
         */
        total: number
      }
      /**
       * 错误码，有错误时返回
       */
      errorCode: string
      /**
       * 错误信息，有错误时返回
       */
      errorMessage: string
      /**
       * 错误参数，统一错误码的自定义参数
       */
      errorParams: any[]
      /**
       * requestId，请求唯一标识
       */
      requestId: string
      /**
       * 返回状态|枚举值: OK,ERROR,EXCEPTION,FORBIDDEN
       */
      state: string
    }
  }

  /**
   * 接口名：用户端404
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=476949&itf=2077035
   */
  'POST/notice/web/404': {
    Req: {}
    Res: {}
  }

  /**
   * 接口名：运管端获取变更中维护页面信息
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=476949&itf=2080352
   */
  'GET/notice/web/omp/getNoticeMessage': {
    Req: {}
    Res: {
      /**
       * 返回数据
       */
      body: {
        content: string
        title: string
      }
      /**
       * 错误码，有错误时返回
       */
      errorCode: string
      /**
       * 错误信息，有错误时返回
       */
      errorMessage: string
      /**
       * 错误参数，统一错误码的自定义参数
       */
      errorParams: any[]
      /**
       * requestId，请求唯一标识
       */
      requestId: string
      /**
       * 返回状态|枚举值: OK,ERROR,EXCEPTION,FORBIDDEN
       */
      state: string
    }
  }

  /**
   * 接口名：获取变更中维护页面信息
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=476949&itf=2077036
   */
  'GET/notice/web/getNoticeMessage': {
    Req: {}
    Res: {
      /**
       * 返回数据
       */
      body: {
        content: string
        title: string
      }
      /**
       * 错误码，有错误时返回
       */
      errorCode: string
      /**
       * 错误信息，有错误时返回
       */
      errorMessage: string
      /**
       * 错误参数，统一错误码的自定义参数
       */
      errorParams: any[]
      /**
       * requestId，请求唯一标识
       */
      requestId: string
      /**
       * 返回状态|枚举值: OK,ERROR,EXCEPTION,FORBIDDEN
       */
      state: string
    }
  }

  /**
   * 接口名：运管端获取变更中维护页面状态
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=476949&itf=2080353
   */
  'GET/notice/web/omp/getNoticeSwitch': {
    Req: {}
    Res: {
      /**
       * 返回数据
       */
      body: {
        noticeSwitch: boolean
      }
      /**
       * 错误码，有错误时返回
       */
      errorCode: string
      /**
       * 错误信息，有错误时返回
       */
      errorMessage: string
      /**
       * 错误参数，统一错误码的自定义参数
       */
      errorParams: any[]
      /**
       * requestId，请求唯一标识
       */
      requestId: string
      /**
       * 返回状态|枚举值: OK,ERROR,EXCEPTION,FORBIDDEN
       */
      state: string
    }
  }

  /**
   * 接口名：变更中维护页面
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=476949&itf=2077037
   */
  'GET/notice/web/getNoticeServicePage': {
    Req: {}
    Res: {}
  }

  /**
   * 接口名：运管端获取变更前弹窗状态
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=476949&itf=2080354
   */
  'GET/notice/web/omp/getPopUpSwitch': {
    Req: {}
    Res: {
      /**
       * 返回数据
       */
      body: {
        noticeSwitch: boolean
      }
      /**
       * 错误码，有错误时返回
       */
      errorCode: string
      /**
       * 错误信息，有错误时返回
       */
      errorMessage: string
      /**
       * 错误参数，统一错误码的自定义参数
       */
      errorParams: any[]
      /**
       * requestId，请求唯一标识
       */
      requestId: string
      /**
       * 返回状态|枚举值: OK,ERROR,EXCEPTION,FORBIDDEN
       */
      state: string
    }
  }

  /**
   * 接口名：获取变更中维护页面状态
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=476949&itf=2077038
   */
  'GET/notice/web/getNoticeStatus': {
    Req: {}
    Res: {
      /**
       * 返回数据
       */
      body: {
        status: boolean
        url: string
      }
      /**
       * 错误码，有错误时返回
       */
      errorCode: string
      /**
       * 错误信息，有错误时返回
       */
      errorMessage: string
      /**
       * 错误参数，统一错误码的自定义参数
       */
      errorParams: any[]
      /**
       * requestId，请求唯一标识
       */
      requestId: string
      /**
       * 返回状态|枚举值: OK,ERROR,EXCEPTION,FORBIDDEN
       */
      state: string
    }
  }

  /**
   * 接口名：用户端获取变更前弹窗信息
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=476949&itf=2077039
   */
  'GET/notice/web/getPopUpMessage': {
    Req: {}
    Res: {
      /**
       * 返回数据
       */
      body: {
        content: string
        title: string
      }
      /**
       * 错误码，有错误时返回
       */
      errorCode: string
      /**
       * 错误信息，有错误时返回
       */
      errorMessage: string
      /**
       * 错误参数，统一错误码的自定义参数
       */
      errorParams: any[]
      /**
       * requestId，请求唯一标识
       */
      requestId: string
      /**
       * 返回状态|枚举值: OK,ERROR,EXCEPTION,FORBIDDEN
       */
      state: string
    }
  }

  /**
   * 接口名：设置变更中维护页面信息
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=476949&itf=2077040
   */
  'POST/notice/web/setNoticeMessage': {
    Req: {
      content?: string
      title?: string
    }
    Res: {
      /**
       * 返回数据
       */
      body: string
      /**
       * 错误码，有错误时返回
       */
      errorCode: string
      /**
       * 错误信息，有错误时返回
       */
      errorMessage: string
      /**
       * 错误参数，统一错误码的自定义参数
       */
      errorParams: any[]
      /**
       * requestId，请求唯一标识
       */
      requestId: string
      /**
       * 返回状态|枚举值: OK,ERROR,EXCEPTION,FORBIDDEN
       */
      state: string
    }
  }

  /**
   * 接口名：设置维护中维护页面内容
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=476949&itf=2077041
   */
  'GET/notice/web/setNoticeMessagePage': {
    Req: {}
    Res: {}
  }

  /**
   * 接口名：控制变更中维护页面开关
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=476949&itf=2077042
   */
  'POST/notice/web/setNoticeSwitch': {
    Req: {
      noticeSwitch?: boolean
    }
    Res: {
      /**
       * 返回数据
       */
      body: string
      /**
       * 错误码，有错误时返回
       */
      errorCode: string
      /**
       * 错误信息，有错误时返回
       */
      errorMessage: string
      /**
       * 错误参数，统一错误码的自定义参数
       */
      errorParams: any[]
      /**
       * requestId，请求唯一标识
       */
      requestId: string
      /**
       * 返回状态|枚举值: OK,ERROR,EXCEPTION,FORBIDDEN
       */
      state: string
    }
  }

  /**
   * 接口名：设置变更前弹窗信息
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=476949&itf=2077043
   */
  'POST/notice/web/setPopUpMessage': {
    Req: {
      content?: string
      title?: string
    }
    Res: {
      /**
       * 返回数据
       */
      body: string
      /**
       * 错误码，有错误时返回
       */
      errorCode: string
      /**
       * 错误信息，有错误时返回
       */
      errorMessage: string
      /**
       * 错误参数，统一错误码的自定义参数
       */
      errorParams: any[]
      /**
       * requestId，请求唯一标识
       */
      requestId: string
      /**
       * 返回状态|枚举值: OK,ERROR,EXCEPTION,FORBIDDEN
       */
      state: string
    }
  }

  /**
   * 接口名：控制变更前弹窗开关
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=476949&itf=2077044
   */
  'POST/notice/web/setPopUpSwitch': {
    Req: {
      noticeSwitch?: boolean
    }
    Res: {
      /**
       * 返回数据
       */
      body: string
      /**
       * 错误码，有错误时返回
       */
      errorCode: string
      /**
       * 错误信息，有错误时返回
       */
      errorMessage: string
      /**
       * 错误参数，统一错误码的自定义参数
       */
      errorParams: any[]
      /**
       * requestId，请求唯一标识
       */
      requestId: string
      /**
       * 返回状态|枚举值: OK,ERROR,EXCEPTION,FORBIDDEN
       */
      state: string
    }
  }

  /**
   * 接口名：运管端获取变更前弹窗信息
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=476949&itf=2078603
   */
  'GET/notice/web/omp/getPopUpMessage': {
    Req: {}
    Res: {
      /**
       * 返回数据
       */
      body: {
        content: string
        title: string
      }
      /**
       * 错误码，有错误时返回
       */
      errorCode: string
      /**
       * 错误信息，有错误时返回
       */
      errorMessage: string
      /**
       * 错误参数，统一错误码的自定义参数
       */
      errorParams: string[]
      /**
       * requestId，请求唯一标识
       */
      requestId: string
      /**
       * 返回状态|枚举值: OK,ERROR,EXCEPTION,FORBIDDEN
       */
      state: string
    }
  }

  /**
   * 接口名：存储池容量查询
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=478298&itf=2084592
   */
  'GET/storage/admin/pools': {
    Req: {}
    Res: {
      /**
       * 返回数据
       */
      body: {
        /**
         * 剩余量
         */
        available: string
        /**
         * 见指标编码表，若为单一指标，可为空,指标\tindexCode\n" +
         *             "内存\tram\n" +
         *             "CPU\tcpu\n" +
         *             "磁盘\tdisk\n" +
         *             "数据盘\tdatadisk
         */
        indexCode: string
        /**
         * 资源池编号，单一为default, 存储服务回填传入值
         */
        poolId: string
        /**
         * 见资源类型编码表
         */
        resourceCode: string
        /**
         * 0-100，阈值，当已使用百分比大于此值时触发告警，若不填写则默认90
         */
        threshold: string
        /**
         * 总量
         */
        total: string
        /**
         * 已用量
         */
        used: string
        /**
         * 单位：个，byte等
         */
        unit: string
      }[]
      /**
       * 错误码，有错误时返回
       */
      errorCode: string
      /**
       * 错误信息，有错误时返回
       */
      errorMessage: string
      /**
       * 错误参数，统一错误码的自定义参数
       */
      errorParams: any[]
      /**
       * requestId，请求唯一标识，必须
       */
      requestId: string
      /**
       * 返回状态,必须|枚举值: OK,ERROR,EXCEPTION,FORBIDDEN
       */
      state: string
    }
  }

  /**
   * 接口名：存储池容量查询(给前端用）
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=478298&itf=2087038
   */
  'GET/storage/web/pools': {
    Req: {}
    Res: {
      /**
       * 返回数据
       */
      body: {
        /**
         * 剩余量
         */
        available: string
        /**
         * 见指标编码表，若为单一指标，可为空,指标\tindexCode\n" +
         *             "内存\tram\n" +
         *             "CPU\tcpu\n" +
         *             "磁盘\tdisk\n" +
         *             "数据盘\tdatadisk
         */
        indexCode: string
        /**
         * 资源池编号，单一为default, 存储服务回填传入值
         */
        poolId: string
        /**
         * 见资源类型编码表
         */
        resourceCode: string
        /**
         * 0-100，阈值，当已使用百分比大于此值时触发告警，若不填写则默认90
         */
        threshold: string
        /**
         * 总量
         */
        total: string
        /**
         * 已用量
         */
        used: string
        /**
         * 单位：个，byte等
         */
        unit: string
      }[]
      /**
       * 错误码，有错误时返回
       */
      errorCode: string
      /**
       * 错误信息，有错误时返回
       */
      errorMessage: string
      /**
       * 错误参数，统一错误码的自定义参数
       */
      errorParams: any[]
      /**
       * requestId，请求唯一标识，必须
       */
      requestId: string
      /**
       * 返回状态,必须|枚举值: OK,ERROR,EXCEPTION,FORBIDDEN
       */
      state: string
    }
  }

  /**
   * 接口名：用户扩缩容接口
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=478298&itf=2084593
   */
  'POST/storage/product/capacity': {
    Req: {
      /**
       * 容量（GB）
       */
      capacity: number
      /**
       * 唯一标识
       */
      userId: string
    }
    Res: {
      /**
       * 返回数据
       */
      body: {}
      /**
       * 错误码，有错误时返回
       */
      errorCode: string
      /**
       * 错误信息，有错误时返回
       */
      errorMessage: string
      /**
       * 错误参数，统一错误码的自定义参数
       */
      errorParams: any[]
      /**
       * requestId，请求唯一标识，必须
       */
      requestId: string
      /**
       * 返回状态,必须|枚举值: OK,ERROR,EXCEPTION,FORBIDDEN
       */
      state: string
    }
  }

  /**
   * 接口名：用户存储记录列表接口
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=478298&itf=2084594
   */
  'GET/storage/product/list': {
    Req: {
      /**
       * history
       */
      history?: boolean
      /**
       * userId
       */
      userId: string
    }
    Res: {
      /**
       * 返回数据
       */
      body: {}
      /**
       * 错误码，有错误时返回
       */
      errorCode: string
      /**
       * 错误信息，有错误时返回
       */
      errorMessage: string
      /**
       * 错误参数，统一错误码的自定义参数
       */
      errorParams: any[]
      /**
       * requestId，请求唯一标识，必须
       */
      requestId: string
      /**
       * 返回状态,必须|枚举值: OK,ERROR,EXCEPTION,FORBIDDEN
       */
      state: string
    }
  }

  /**
   * 接口名：用户话单查询
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=478298&itf=2084595
   */
  'POST/storage/product/storage_status': {
    Req: {
      /**
       * beginTime
       */
      beginTime: string
      /**
       * endTime
       */
      endTime: string
      /**
       * requestId
       */
      requestId: string
    }
    Res: {
      /**
       * 返回数据
       */
      body: {
        resourceCode: string
        available: number
        indexCode: string
        threadshold: string
        usage: number
        resourceId: string
        total: number
      }
      /**
       * 错误码，有错误时返回
       */
      errorCode: string
      /**
       * 错误信息，有错误时返回
       */
      errorMessage: string
      /**
       * 错误参数，统一错误码的自定义参数
       */
      errorParams: any[]
      /**
       * requestId，请求唯一标识，必须
       */
      requestId: string
      /**
       * 返回状态,必须|枚举值: OK,ERROR,EXCEPTION,FORBIDDEN
       */
      state: string
    }
  }

  /**
   * 接口名：用户资源查询接口
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=478298&itf=2084596
   */
  'POST/storage/product/usage': {
    Req: {
      /**
       * 订单来源
       */
      orderSource: string
      /**
       * 订单类型：1：新增；2：删除；3：暂停；4：恢复
       */
      orderType: number
      /**
       * 产品类型：deepLearning or visualModeling or education
       */
      productType: string
      /**
       * 项目id
       */
      projectId: string
      /**
       * 项目配额
       */
      projectQuota: number
      /**
       * 请求唯一标识
       */
      requestId: string
      /**
       * 资源id
       */
      resourceId: string
      /**
       * 存储类型 0:用户存储 1:项目存储
       */
      storeType: number
      /**
       * 用户id
       */
      userId: string
      /**
       * 用户类型：1 互联网用户；2政企用户；
       */
      userType: number
    }
    Res: {
      /**
       * 返回数据
       */
      body: {
        available: number
        indexCode: string
        resourceCode: string
        total: number
        threadshold: string
        usage: number
        resourceId: string
      }
      /**
       * 错误码，有错误时返回
       */
      errorCode: string
      /**
       * 错误信息，有错误时返回
       */
      errorMessage: string
      /**
       * 错误参数，统一错误码的自定义参数
       */
      errorParams: any[]
      /**
       * requestId，请求唯一标识，必须
       */
      requestId: string
      /**
       * 返回状态,必须|枚举值: OK,ERROR,EXCEPTION,FORBIDDEN
       */
      state: string
    }
  }

  /**
   * 接口名：项目资源初始化
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=478298&itf=2084597
   */
  'POST/storage/project/initialize': {
    Req: {
      /**
       * 订单来源
       */
      orderSource: string
      /**
       * 订单类型：1：新增；2：删除；3：暂停；4：恢复
       */
      orderType: number
      /**
       * 产品类型：deepLearning or visualModeling or education
       */
      productType: string
      /**
       * 项目id
       */
      projectId: string
      /**
       * 项目配额
       */
      projectQuota: number
      /**
       * 请求唯一标识
       */
      requestId: string
      /**
       * 资源id
       */
      resourceId: string
      /**
       * 存储类型 0:用户存储 1:项目存储
       */
      storeType: number
      /**
       * 用户id
       */
      userId: string
      /**
       * 用户类型：1 互联网用户；2政企用户；
       */
      userType: number
    }
    Res: {
      /**
       * 返回数据
       */
      body: {
        available: number
        resourceId: string
        resourceCode: string
        total: number
        indexCode: string
        threadshold: string
        usage: number
      }
      /**
       * 错误码，有错误时返回
       */
      errorCode: string
      /**
       * 错误信息，有错误时返回
       */
      errorMessage: string
      /**
       * 错误参数，统一错误码的自定义参数
       */
      errorParams: any[]
      /**
       * requestId，请求唯一标识，必须
       */
      requestId: string
      /**
       * 返回状态,必须|枚举值: OK,ERROR,EXCEPTION,FORBIDDEN
       */
      state: string
    }
  }

  /**
   * 接口名：用户资源初始化
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=478298&itf=2084598
   */
  'GET/storage/web/initialize': {
    Req: {}
    Res: {
      /**
       * 返回数据
       */
      body: {
        available: number
        indexCode: string
        resourceCode: string
        resourceId: string
        total: number
        usage: number
        threadshold: string
      }
      /**
       * 错误码，有错误时返回
       */
      errorCode: string
      /**
       * 错误信息，有错误时返回
       */
      errorMessage: string
      /**
       * 错误参数，统一错误码的自定义参数
       */
      errorParams: any[]
      /**
       * requestId，请求唯一标识，必须
       */
      requestId: string
      /**
       * 返回状态,必须|枚举值: OK,ERROR,EXCEPTION,FORBIDDEN
       */
      state: string
    }
  }

  /**
   * 接口名：用户数量查询
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=478298&itf=2084599
   */
  'POST/storage/web/storage_user_count': {
    Req: {}
    Res: {
      /**
       * 返回数据
       */
      body: {
        available: number
        resourceId: string
        total: number
        resourceCode: string
        indexCode: string
        threadshold: string
        usage: number
      }
      /**
       * 错误码，有错误时返回
       */
      errorCode: string
      /**
       * 错误信息，有错误时返回
       */
      errorMessage: string
      /**
       * 错误参数，统一错误码的自定义参数
       */
      errorParams: any[]
      /**
       * requestId，请求唯一标识，必须
       */
      requestId: string
      /**
       * 返回状态,必须|枚举值: OK,ERROR,EXCEPTION,FORBIDDEN
       */
      state: string
    }
  }

  /**
   * 接口名：用户资源查询接口
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=478298&itf=2084600
   */
  'GET/storage/web/usage': {
    Req: {}
    Res: {
      /**
       * 返回数据
       */
      body: {
        indexCode: string
        resourceCode: string
        total: number
        available: number
        resourceId: string
        threadshold: string
        usage: number
      }
      /**
       * 错误码，有错误时返回
       */
      errorCode: string
      /**
       * 错误信息，有错误时返回
       */
      errorMessage: string
      /**
       * 错误参数，统一错误码的自定义参数
       */
      errorParams: any[]
      /**
       * requestId，请求唯一标识，必须
       */
      requestId: string
      /**
       * 返回状态,必须|枚举值: OK,ERROR,EXCEPTION,FORBIDDEN
       */
      state: string
    }
  }

  /**
   * 接口名：查询某个时间范围内算力豆消费情况
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=477235&itf=2078629
   */
  'GET/accounting/back/computemgr/all-consumed': {
    Req: {
      /**
       * 开始时间
       */
      beginTime: string
      /**
       * 结束时间
       */
      endTime: string
    }
    Res: {
      /**
       * 返回数据
       */
      body: {
        /**
         * 周期开始时间 (yyyy-MM-dd HH:mm:ss) GMT+8
         */
        beginTime: string
        /**
         * 算力豆消费值
         */
        consumedCount: number
        /**
         * 周期结束时间 (yyyy-MM-dd HH:mm:ss) GMT+8
         */
        endTime: string
        /**
         * 主键ID
         */
        id: number
        /**
         * 实例开始时间 (yyyy-MM-dd HH:mm:ss) GMT+8
         */
        instanceBeginTime: string
        /**
         * 模块名称
         */
        moduleName: string
        /**
         * 实例结束时间 (yyyy-MM-dd HH:mm:ss) GMT+8
         */
        instanceEndTime: string
        /**
         * 实例Id
         */
        instanceId: string
        /**
         * 实例名称
         */
        instanceName: string
        /**
         * 模块 0-课程，1-竞赛，2-数据集，3-求职，4-模型
         */
        module: number
        /**
         * 用户组
         */
        userGroup: string
        /**
         * 规格
         */
        spec: string
        /**
         * 用户ID
         */
        userId: string
      }[]
      /**
       * 错误码，有错误时返回
       */
      errorCode: string
      /**
       * 错误信息，有错误时返回
       */
      errorMessage: string
      /**
       * 错误参数，统一错误码的自定义参数
       */
      errorParams: any[]
      /**
       * requestId，请求唯一标识，必须
       */
      requestId: string
      /**
       * 返回状态|枚举值: OK,ERROR,EXCEPTION,FORBIDDEN
       */
      state: string
    }
  }

  /**
   * 接口名：查询用户当前可用算力豆及套餐规格
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=477235&itf=2078630
   */
  'GET/accounting/back/computemgr/available/{userId}': {
    Req: {
      userId: string
    }
    Res: {
      /**
       * 返回数据
       */
      body: {
        /**
         * 当前可用
         */
        availableCount: number
        /**
         * 计算套餐
         */
        specMap: {}
      }
      /**
       * 错误码，有错误时返回
       */
      errorCode: string
      /**
       * 错误信息，有错误时返回
       */
      errorMessage: string
      /**
       * 错误参数，统一错误码的自定义参数
       */
      errorParams: any[]
      /**
       * requestId，请求唯一标识，必须
       */
      requestId: string
      /**
       * 返回状态|枚举值: OK,ERROR,EXCEPTION,FORBIDDEN
       */
      state: string
    }
  }

  /**
   * 接口名：给用户的算力豆账户充值
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=477235&itf=2078631
   */
  'POST/accounting/back/computemgr/recharge': {
    Req: {
      /**
       * 算力豆数量，正整数
       */
      computeCount?: number
      /**
       * 邀请码到期时间，时间戳毫秒数
       */
      expirationTime?: number
      /**
       * 事项，不超过20个字符
       */
      item?: string
      /**
       * 用户id
       */
      userId?: string
    }
    Res: {
      /**
       * 返回数据
       */
      body: number
      /**
       * 错误码，有错误时返回
       */
      errorCode: string
      /**
       * 错误信息，有错误时返回
       */
      errorMessage: string
      /**
       * 错误参数，统一错误码的自定义参数
       */
      errorParams: any[]
      /**
       * requestId，请求唯一标识，必须
       */
      requestId: string
      /**
       * 返回状态|枚举值: OK,ERROR,EXCEPTION,FORBIDDEN
       */
      state: string
    }
  }

  /**
   * 接口名：资源创建接口
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=478299&itf=2084601
   */
  'POST/storage/create': {
    Req: {
      /**
       * 订单来源
       */
      orderSource: string
      /**
       * 订单类型：1：新增；2：删除；3：暂停；4：恢复
       */
      orderType: number
      /**
       * 产品类型：deepLearning or visualModeling or education
       */
      productType: string
      /**
       * 项目id
       */
      projectId: string
      /**
       * 项目配额
       */
      projectQuota: number
      /**
       * 请求唯一标识
       */
      requestId: string
      /**
       * 资源id
       */
      resourceId: string
      /**
       * 存储类型 0:用户存储 1:项目存储
       */
      storeType: number
      /**
       * 用户id
       */
      userId: string
      /**
       * 用户类型：1 互联网用户；2政企用户；
       */
      userType: number
    }
    Res: {
      /**
       * 返回数据
       */
      body: {}
      /**
       * 错误码，有错误时返回
       */
      errorCode: string
      /**
       * 错误信息，有错误时返回
       */
      errorMessage: string
      /**
       * 错误参数，统一错误码的自定义参数
       */
      errorParams: any[]
      /**
       * requestId，请求唯一标识，必须
       */
      requestId: string
      /**
       * 返回状态,必须|枚举值: OK,ERROR,EXCEPTION,FORBIDDEN
       */
      state: string
    }
  }

  /**
   * 接口名：资源删除接口
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=478299&itf=2084602
   */
  'POST/storage/delete': {
    Req: {
      /**
       * 订单来源
       */
      orderSource: string
      /**
       * 订单类型：1：新增；2：删除；3：暂停；4：恢复
       */
      orderType: number
      /**
       * 产品类型：deepLearning or visualModeling or education
       */
      productType: string
      /**
       * 项目id
       */
      projectId: string
      /**
       * 项目配额
       */
      projectQuota: number
      /**
       * 请求唯一标识
       */
      requestId: string
      /**
       * 资源id
       */
      resourceId: string
      /**
       * 存储类型 0:用户存储 1:项目存储
       */
      storeType: number
      /**
       * 用户id
       */
      userId: string
      /**
       * 用户类型：1 互联网用户；2政企用户；
       */
      userType: number
    }
    Res: {
      /**
       * 返回数据
       */
      body: {
        /**
         * 资源实例id
         */
        instanceId: string
        /**
         * 订单类型，1 创建
         */
        orderType: number
        /**
         * 资源存储目录
         */
        dirAddr: string
        /**
         * bc-op移动云管分配，orderSource
         */
        orderSource: string
      }
      /**
       * 错误码，有错误时返回
       */
      errorCode: string
      /**
       * 错误信息，有错误时返回
       */
      errorMessage: string
      /**
       * 错误参数，统一错误码的自定义参数
       */
      errorParams: any[]
      /**
       * requestId，请求唯一标识，必须
       */
      requestId: string
      /**
       * 返回状态,必须|枚举值: OK,ERROR,EXCEPTION,FORBIDDEN
       */
      state: string
    }
  }

  /**
   * 接口名：资源暂停接口
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=478299&itf=2084603
   */
  'POST/storage/pause': {
    Req: {
      /**
       * 订单来源
       */
      orderSource: string
      /**
       * 订单类型：1：新增；2：删除；3：暂停；4：恢复
       */
      orderType: number
      /**
       * 产品类型：deepLearning or visualModeling or education
       */
      productType: string
      /**
       * 项目id
       */
      projectId: string
      /**
       * 项目配额
       */
      projectQuota: number
      /**
       * 请求唯一标识
       */
      requestId: string
      /**
       * 资源id
       */
      resourceId: string
      /**
       * 存储类型 0:用户存储 1:项目存储
       */
      storeType: number
      /**
       * 用户id
       */
      userId: string
      /**
       * 用户类型：1 互联网用户；2政企用户；
       */
      userType: number
    }
    Res: {
      /**
       * 返回数据
       */
      body: {
        /**
         * bc-op移动云管分配，orderSource
         */
        orderSource: string
        /**
         * 资源实例id
         */
        instanceId: string
        /**
         * 资源存储目录
         */
        dirAddr: string
        /**
         * 订单类型，1 创建
         */
        orderType: number
      }
      /**
       * 错误码，有错误时返回
       */
      errorCode: string
      /**
       * 错误信息，有错误时返回
       */
      errorMessage: string
      /**
       * 错误参数，统一错误码的自定义参数
       */
      errorParams: any[]
      /**
       * requestId，请求唯一标识，必须
       */
      requestId: string
      /**
       * 返回状态,必须|枚举值: OK,ERROR,EXCEPTION,FORBIDDEN
       */
      state: string
    }
  }

  /**
   * 接口名：资源恢复接口
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=478299&itf=2084604
   */
  'POST/storage/resume': {
    Req: {
      /**
       * 订单来源
       */
      orderSource: string
      /**
       * 订单类型：1：新增；2：删除；3：暂停；4：恢复
       */
      orderType: number
      /**
       * 产品类型：deepLearning or visualModeling or education
       */
      productType: string
      /**
       * 项目id
       */
      projectId: string
      /**
       * 项目配额
       */
      projectQuota: number
      /**
       * 请求唯一标识
       */
      requestId: string
      /**
       * 资源id
       */
      resourceId: string
      /**
       * 存储类型 0:用户存储 1:项目存储
       */
      storeType: number
      /**
       * 用户id
       */
      userId: string
      /**
       * 用户类型：1 互联网用户；2政企用户；
       */
      userType: number
    }
    Res: {
      /**
       * 返回数据
       */
      body: {
        /**
         * 资源存储目录
         */
        dirAddr: string
        /**
         * bc-op移动云管分配，orderSource
         */
        orderSource: string
        /**
         * 订单类型，1 创建
         */
        orderType: number
        /**
         * 资源实例id
         */
        instanceId: string
      }
      /**
       * 错误码，有错误时返回
       */
      errorCode: string
      /**
       * 错误信息，有错误时返回
       */
      errorMessage: string
      /**
       * 错误参数，统一错误码的自定义参数
       */
      errorParams: any[]
      /**
       * requestId，请求唯一标识，必须
       */
      requestId: string
      /**
       * 返回状态,必须|枚举值: OK,ERROR,EXCEPTION,FORBIDDEN
       */
      state: string
    }
  }

  /**
   * 接口名：资源查询接口
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=478299&itf=2084605
   */
  'GET/storage/search': {
    Req: {
      /**
       * poolId
       */
      poolId: string
      /**
       * requestId
       */
      requestId: string
    }
    Res: {
      /**
       * 返回数据
       */
      body: {
        /**
         * 剩余量
         */
        available: string
        /**
         * 总量
         */
        total: string
        /**
         * 资源池编号，单一为default, 存储服务回填传入值
         */
        poolId: string
        /**
         * 见资源类型编码表
         */
        resourceCode: string
        /**
         * 见指标编码表，若为单一指标，可为空,指标\tindexCode\n" +
         *             "内存\tram\n" +
         *             "CPU\tcpu\n" +
         *             "磁盘\tdisk\n" +
         *             "数据盘\tdatadisk
         */
        indexCode: string
        /**
         * 0-100，阈值，当已使用百分比大于此值时触发告警，若不填写则默认90
         */
        threshold: string
        /**
         * 已用量
         */
        used: string
        /**
         * 单位：个，byte等
         */
        unit: string
      }[]
      /**
       * 错误码，有错误时返回
       */
      errorCode: string
      /**
       * 错误信息，有错误时返回
       */
      errorMessage: string
      /**
       * 错误参数，统一错误码的自定义参数
       */
      errorParams: any[]
      /**
       * requestId，请求唯一标识，必须
       */
      requestId: string
      /**
       * 返回状态,必须|枚举值: OK,ERROR,EXCEPTION,FORBIDDEN
       */
      state: string
    }
  }

  /**
   * 接口名：资源计量接口
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=478299&itf=2084606
   */
  'GET/storage/used': {
    Req: {
      /**
       * beginTime
       */
      beginTime: string
      /**
       * endTime
       */
      endTime: string
      /**
       * requestId
       */
      requestId: string
    }
    Res: {
      /**
       * 返回数据
       */
      body: {
        /**
         * yyyy-MM-dd'T'HH:mm:ss'Z'
         */
        beginTime: string
        /**
         * yyyy-MM-dd'T'HH:mm:ss'Z'
         */
        endTime: string
        /**
         * 资源ID
         */
        resourcesId: string
        /**
         * InstanceID
         */
        instanceId: string
        /**
         * 组织id
         */
        groupId: string
        /**
         * CPU
         */
        cpu: string
        /**
         * 资源类型
         */
        resourceType: string
        /**
         * 已用存储
         */
        nowUsed: string
        /**
         * Storage
         */
        storage: string
      }[]
      /**
       * 错误码，有错误时返回
       */
      errorCode: string
      /**
       * 错误信息，有错误时返回
       */
      errorMessage: string
      /**
       * 错误参数，统一错误码的自定义参数
       */
      errorParams: any[]
      /**
       * requestId，请求唯一标识，必须
       */
      requestId: string
      /**
       * 返回状态,必须|枚举值: OK,ERROR,EXCEPTION,FORBIDDEN
       */
      state: string
    }
  }

  /**
   * 接口名：单独添加考生
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=477509&itf=2080105
   */
  'POST/examination/aloneadd/student': {
    Req: {
      /**
       * 用户名
       */
      accountname?: string
      /**
       * 考试链接
       */
      address?: string
      /**
       * 创建时间
       */
      createtime?: string
      /**
       * 试卷id
       */
      default1?: string
      /**
       * 考试结束时间
       */
      endexamtime?: string
      /**
       * 考试时长
       */
      examduration?: string
      /**
       * 试卷名称
       */
      exampapername: string
      /**
       * 考试状态
       */
      examsta?: number
      /**
       * 简历id
       */
      foreignkey?: string
      /**
       * 身份
       */
      identity?: string
      /**
       * 一级组织
       */
      organization: string
      /**
       * 邮件发送状态
       */
      sendemailsta?: boolean
      /**
       * 考试开始时间
       */
      startexamtime?: string
      /**
       * 邮箱
       */
      uemail: string
      /**
       * 姓名
       */
      uname: string
      /**
       * 手机号
       */
      uphone: string
      /**
       * 用户是否存在
       */
      userexiststa?: boolean
      /**
       * 用户id
       */
      userid?: string
    }
    Res: {
      /**
       * 返回数据
       */
      body: {}
      /**
       * 错误码，有错误时返回
       */
      errorCode: string
      /**
       * 错误信息，有错误时返回
       */
      errorMessage: string
      /**
       * 错误参数，统一错误码的自定义参数
       */
      errorParams: any[]
      /**
       * requestId，请求唯一标识
       */
      requestId: string
      /**
       * 返回状态|枚举值: OK,ERROR,EXCEPTION,FORBIDDEN
       */
      state: string
    }
  }

  /**
   * 接口名：下载表格样例
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=477509&itf=2086357
   */
  'GET/examination/exportExample': {
    Req: {}
    Res: {
      /**
       * 返回数据
       */
      body: {}
      /**
       * 错误码，有错误时返回
       */
      errorCode: string
      /**
       * 错误信息，有错误时返回
       */
      errorMessage: string
      /**
       * 错误参数，统一错误码的自定义参数
       */
      errorParams: any[]
      /**
       * requestId，请求唯一标识
       */
      requestId: string
      /**
       * 返回状态|枚举值: OK,ERROR,EXCEPTION,FORBIDDEN
       */
      state: string
    }
  }

  /**
   * 接口名：考生列表搜索框中获取试卷名称
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=477509&itf=2096642
   */
  'GET/examination/getSearchExamPapername': {
    Req: {}
    Res: {
      /**
       * 返回数据
       */
      body: {}
      /**
       * 错误码，有错误时返回
       */
      errorCode: string
      /**
       * 错误信息，有错误时返回
       */
      errorMessage: string
      /**
       * 错误参数，统一错误码的自定义参数
       */
      errorParams: any[]
      /**
       * requestId，请求唯一标识
       */
      requestId: string
      /**
       * 返回状态|枚举值: OK,ERROR,EXCEPTION,FORBIDDEN
       */
      state: string
    }
  }

  /**
   * 接口名：批量添加考生
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=477509&itf=2080106
   */
  'POST/examination/batchadd/student': {
    Req: {
      /**
       * file
       */
      file?: null
    }
    Res: {
      code: string
      msg: string
    }
  }

  /**
   * 接口名：下载失败考生列表
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=477509&itf=2080107
   */
  'GET/examination/exportFailedStudent': {
    Req: {}
    Res: {
      /**
       * 返回数据
       */
      body: {}
      /**
       * 错误码，有错误时返回
       */
      errorCode: string
      /**
       * 错误信息，有错误时返回
       */
      errorMessage: string
      /**
       * 错误参数，统一错误码的自定义参数
       */
      errorParams: any[]
      /**
       * requestId，请求唯一标识
       */
      requestId: string
      /**
       * 返回状态|枚举值: OK,ERROR,EXCEPTION,FORBIDDEN
       */
      state: string
    }
  }

  /**
   * 接口名：单独添加考生中获取试卷名称
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=477509&itf=2080108
   */
  'GET/examination/getExamPapername': {
    Req: {}
    Res: {
      /**
       * 返回数据
       */
      body: {}
      /**
       * 错误码，有错误时返回
       */
      errorCode: string
      /**
       * 错误信息，有错误时返回
       */
      errorMessage: string
      /**
       * 错误参数，统一错误码的自定义参数
       */
      errorParams: any[]
      /**
       * requestId，请求唯一标识
       */
      requestId: string
      /**
       * 返回状态|枚举值: OK,ERROR,EXCEPTION,FORBIDDEN
       */
      state: string
    }
  }

  /**
   * 接口名：单独添加考生中获取一级组织
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=477509&itf=2080109
   */
  'GET/examination/getOrganization': {
    Req: {}
    Res: {
      /**
       * 返回数据
       */
      body: {}
      /**
       * 错误码，有错误时返回
       */
      errorCode: string
      /**
       * 错误信息，有错误时返回
       */
      errorMessage: string
      /**
       * 错误参数，统一错误码的自定义参数
       */
      errorParams: any[]
      /**
       * requestId，请求唯一标识
       */
      requestId: string
      /**
       * 返回状态|枚举值: OK,ERROR,EXCEPTION,FORBIDDEN
       */
      state: string
    }
  }

  /**
   * 接口名：根据试卷导出学生信息
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=477511&itf=2095854
   */
  'GET/examination/get/exportExamInfoByExampapername': {
    Req: {
      /**
       * exampapername
       */
      exampapername: string
    }
    Res: {
      /**
       * 返回数据
       */
      body: {}
      /**
       * 错误码，有错误时返回
       */
      errorCode: string
      /**
       * 错误信息，有错误时返回
       */
      errorMessage: string
      /**
       * 错误参数，统一错误码的自定义参数
       */
      errorParams: any[]
      /**
       * requestId，请求唯一标识
       */
      requestId: string
      /**
       * 返回状态|枚举值: OK,ERROR,EXCEPTION,FORBIDDEN
       */
      state: string
    }
  }

  /**
   * 接口名：预览邮件主体
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=477511&itf=2087561
   */
  'POST/examination/get/previewHtml': {
    Req: {}
    Res: {}
  }

  /**
   * 接口名：发送邮件中各个状态人数
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=477511&itf=2095855
   */
  'GET/examination/get/sendEmailStaNum': {
    Req: {
      /**
       * exampapername
       */
      exampapername?: string
    }
    Res: {
      /**
       * 返回数据
       */
      body: {}
      /**
       * 错误码，有错误时返回
       */
      errorCode: string
      /**
       * 错误信息，有错误时返回
       */
      errorMessage: string
      /**
       * 错误参数，统一错误码的自定义参数
       */
      errorParams: any[]
      /**
       * requestId，请求唯一标识
       */
      requestId: string
      /**
       * 返回状态|枚举值: OK,ERROR,EXCEPTION,FORBIDDEN
       */
      state: string
    }
  }

  /**
   * 接口名：考生管理主页面
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=477511&itf=2080114
   */
  'POST/examination/find/StudentList': {
    Req: {
      /**
       * 考试链接，1已生成，0未生成
       */
      addresssta?: string
      /**
       * 邮件反馈，1是，2否，3待确定,4未反馈
       */
      emailfeedback?: string
      /**
       * 试卷名称
       */
      exampapername?: string
      /**
       * 考试状态，1已登录，0未登录
       */
      examsta?: string
      /**
       * 一级组织
       */
      organization?: string
      /**
       * 邮件通知，1发送成功,2发送失败,3未发送
       */
      sendemailsta?: string
      /**
       * 用户名/姓名
       */
      uname?: string
      /**
       * 可考状态，1可以考试，0不可以考试
       */
      whetherexamsta?: string
      /**
       * 第几页
       */
      pageNum?: number
      /**
       * 每页几条数据
       */
      pageSize?: number
    }
    Res: {
      /**
       * 返回数据
       */
      body: {}
      /**
       * 错误码，有错误时返回
       */
      errorCode: string
      /**
       * 错误信息，有错误时返回
       */
      errorMessage: string
      /**
       * 错误参数，统一错误码的自定义参数
       */
      errorParams: any[]
      /**
       * requestId，请求唯一标识
       */
      requestId: string
      /**
       * 返回状态|枚举值: OK,ERROR,EXCEPTION,FORBIDDEN
       */
      state: string
    }
  }

  /**
   * 接口名：根据uphone手机号查看考生详情
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=477511&itf=2080115
   */
  'GET/examination/get/detail': {
    Req: {
      /**
       * uphone
       */
      uphone: string
    }
    Res: {
      /**
       * 返回数据
       */
      body: {}
      /**
       * 错误码，有错误时返回
       */
      errorCode: string
      /**
       * 错误信息，有错误时返回
       */
      errorMessage: string
      /**
       * 错误参数，统一错误码的自定义参数
       */
      errorParams: any[]
      /**
       * requestId，请求唯一标识
       */
      requestId: string
      /**
       * 返回状态|枚举值: OK,ERROR,EXCEPTION,FORBIDDEN
       */
      state: string
    }
  }

  /**
   * 接口名：注销考试链接
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=477511&itf=2080116
   */
  'POST/examination/off/address': {
    Req: {
      /**
       * 手机号
       */
      uphone: string
    }
    Res: {
      /**
       * 返回数据
       */
      body: {}
      /**
       * 错误码，有错误时返回
       */
      errorCode: string
      /**
       * 错误信息，有错误时返回
       */
      errorMessage: string
      /**
       * 错误参数，统一错误码的自定义参数
       */
      errorParams: any[]
      /**
       * requestId，请求唯一标识
       */
      requestId: string
      /**
       * 返回状态|枚举值: OK,ERROR,EXCEPTION,FORBIDDEN
       */
      state: string
    }
  }

  /**
   * 接口名：生成考试链接
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=477511&itf=2080117
   */
  'POST/examination/on/address': {
    Req: {
      /**
       * 试卷名称
       */
      exampapername: string
      /**
       * 简历id
       */
      foreignkey?: string
      /**
       * 邮箱
       */
      uemail: string
      /**
       * 姓名
       */
      uname: string
      /**
       * 手机号
       */
      uphone: string
    }
    Res: {
      /**
       * 返回数据
       */
      body: {}
      /**
       * 错误码，有错误时返回
       */
      errorCode: string
      /**
       * 错误信息，有错误时返回
       */
      errorMessage: string
      /**
       * 错误参数，统一错误码的自定义参数
       */
      errorParams: any[]
      /**
       * requestId，请求唯一标识
       */
      requestId: string
      /**
       * 返回状态|枚举值: OK,ERROR,EXCEPTION,FORBIDDEN
       */
      state: string
    }
  }

  /**
   * 接口名：发送邮件
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=477511&itf=2080118
   */
  'POST/examination/sendExamEmail': {
    Req: {
      /**
       * 群发时此值必填，发送范围，1所有可考考生，2未通知考生，3未反馈考生，4未登录考生，5已通知考生,6已反馈考生，7已登录考生
       */
      sendSta?: string
      /**
       * 手机号,单个发送邮件时此值必填
       */
      uphone?: string
      /**
       * 群发邮件时的试卷名称，当sendSta不为空时此值必填
       */
      exampapername?: string
    }
    Res: {
      /**
       * 返回数据
       */
      body: {}
      /**
       * 错误码，有错误时返回
       */
      errorCode: string
      /**
       * 错误信息，有错误时返回
       */
      errorMessage: string
      /**
       * 错误参数，统一错误码的自定义参数
       */
      errorParams: any[]
      /**
       * requestId，请求唯一标识
       */
      requestId: string
      /**
       * 返回状态|枚举值: OK,ERROR,EXCEPTION,FORBIDDEN
       */
      state: string
    }
  }

  /**
   * 接口名：编辑考生信息
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=477511&itf=2080119
   */
  'POST/examination/update/info': {
    Req: {
      /**
       * 用户名
       */
      accountname: string
      /**
       * 试卷名称
       */
      exampapername: string
      /**
       * 一级组织
       */
      organization: string
      /**
       * 邮箱
       */
      uemail: string
      /**
       * 姓名
       */
      uname: string
      /**
       * 手机号
       */
      uphone: string
      /**
       * 链接
       */
      address?: string
      /**
       * 试卷id
       */
      default1?: string
      /**
       * 考试模式
       */
      default2?: number
      /**
       * 结束考试时间
       */
      endexamtime?: string
      /**
       * 考试时长
       */
      examduration?: string
      /**
       * 简历
       */
      foreignkey?: string
      /**
       * 开始考试时间
       */
      startexamtime?: string
      paperflag?: string
    }
    Res: {
      /**
       * 返回数据
       */
      body: {}
      /**
       * 错误码，有错误时返回
       */
      errorCode: string
      /**
       * 错误信息，有错误时返回
       */
      errorMessage: string
      /**
       * 错误参数，统一错误码的自定义参数
       */
      errorParams: any[]
      /**
       * requestId，请求唯一标识
       */
      requestId: string
      /**
       * 返回状态|枚举值: OK,ERROR,EXCEPTION,FORBIDDEN
       */
      state: string
    }
  }

  /**
   * 接口名：修改可考状态
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=477511&itf=2080120
   */
  'POST/examination/update/whetherexamsta': {
    Req: {
      /**
       * 试卷名
       */
      exampapername?: string
      /**
       * 可考状态，1要修改成可以考试，0要修改成不可以考试，若此值为1则全部都是必填项
       */
      status: string
      /**
       * 邮箱
       */
      uemail?: string
      /**
       * 姓名
       */
      uname?: string
      /**
       * 手机号
       */
      uphone: string
    }
    Res: {
      /**
       * 返回数据
       */
      body: {}
      /**
       * 错误码，有错误时返回
       */
      errorCode: string
      /**
       * 错误信息，有错误时返回
       */
      errorMessage: string
      /**
       * 错误参数，统一错误码的自定义参数
       */
      errorParams: any[]
      /**
       * requestId，请求唯一标识
       */
      requestId: string
      /**
       * 返回状态|枚举值: OK,ERROR,EXCEPTION,FORBIDDEN
       */
      state: string
    }
  }

  /**
   * 接口名：查询组织总数
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=477445&itf=2079714
   */
  'GET/keycloak/web/group/count': {
    Req: {}
    Res: {
      /**
       * 返回数据
       */
      body: number
      /**
       * 错误码，有错误时返回
       */
      errorCode: string
      /**
       * 错误信息，有错误时返回
       */
      errorMessage: string
      /**
       * 错误参数，统一错误码的自定义参数
       */
      errorParams: any[]
      /**
       * requestId，请求唯一标识
       */
      requestId: string
      /**
       * 返回状态|枚举值: OK,ERROR,EXCEPTION,FORBIDDEN
       */
      state: string
    }
  }

  /**
   * 接口名：按组织级别查询组织数
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=477445&itf=2079715
   */
  'GET/keycloak/web/group/countlevel': {
    Req: {}
    Res: {
      /**
       * 返回数据
       */
      body: {}
      /**
       * 错误码，有错误时返回
       */
      errorCode: string
      /**
       * 错误信息，有错误时返回
       */
      errorMessage: string
      /**
       * 错误参数，统一错误码的自定义参数
       */
      errorParams: any[]
      /**
       * requestId，请求唯一标识
       */
      requestId: string
      /**
       * 返回状态|枚举值: OK,ERROR,EXCEPTION,FORBIDDEN
       */
      state: string
    }
  }

  /**
   * 接口名：查询用户当前可用算力豆及套餐规格
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=477236&itf=2078632
   */
  'GET/accounting/web/computemgr/available': {
    Req: {}
    Res: {
      /**
       * 返回数据
       */
      body: {
        /**
         * 当前可用
         */
        availableCount: number
        /**
         * 计算套餐
         */
        specMap: {}
      }
      /**
       * 错误码，有错误时返回
       */
      errorCode: string
      /**
       * 错误信息，有错误时返回
       */
      errorMessage: string
      /**
       * 错误参数，统一错误码的自定义参数
       */
      errorParams: any[]
      /**
       * requestId，请求唯一标识，必须
       */
      requestId: string
      /**
       * 返回状态|枚举值: OK,ERROR,EXCEPTION,FORBIDDEN
       */
      state: string
    }
  }

  /**
   * 接口名：查询用户算力豆明细（全部）
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=477236&itf=2078633
   */
  'POST/accounting/web/computemgr/detail-all': {
    Req: {
      /**
       * 分页参数，页数，从1开始
       */
      pageNum?: number
      /**
       * 分页参数，每页条数
       */
      pageSize?: number
      /**
       * 用户id
       */
      userId?: string
    }
    Res: {
      /**
       * 返回数据
       */
      body: {
        /**
         * 应用列表
         */
        data: {
          /**
           * 详情
           */
          details: string
          /**
           * 数量
           */
          count: number
          /**
           * 事项
           */
          item: string
          /**
           * 编号
           */
          id: number
          /**
           * 排序时间，模型训练消耗，时间显示的是实例运行开始时间；算力豆到期，时间显示的是有效期截止的时间；增加算力豆，时间显示的是增加的时间
           */
          orderTime: string
        }[]
        /**
         * 分页参数，页数，从1开始
         */
        pageNum: number
        /**
         * 应用数量
         */
        total: number
        /**
         * 分页参数，每页条数
         */
        pageSize: number
      }
      /**
       * 错误码，有错误时返回
       */
      errorCode: string
      /**
       * 错误信息，有错误时返回
       */
      errorMessage: string
      /**
       * 错误参数，统一错误码的自定义参数
       */
      errorParams: any[]
      /**
       * requestId，请求唯一标识，必须
       */
      requestId: string
      /**
       * 返回状态|枚举值: OK,ERROR,EXCEPTION,FORBIDDEN
       */
      state: string
    }
  }

  /**
   * 接口名：查询用户算力豆明细（消费）
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=477236&itf=2078634
   */
  'POST/accounting/web/computemgr/detail-consumed': {
    Req: {
      /**
       * 分页参数，页数，从1开始
       */
      pageNum?: number
      /**
       * 分页参数，每页条数
       */
      pageSize?: number
      /**
       * 用户id
       */
      userId?: string
    }
    Res: {
      /**
       * 返回数据
       */
      body: {
        /**
         * 应用列表
         */
        data: {
          /**
           * 编号
           */
          id: number
          /**
           * 数量
           */
          count: number
          /**
           * 事项
           */
          item: string
          /**
           * 排序时间，模型训练消耗，时间显示的是实例运行开始时间；算力豆到期，时间显示的是有效期截止的时间；增加算力豆，时间显示的是增加的时间
           */
          orderTime: string
          /**
           * 详情
           */
          details: string
        }[]
        /**
         * 分页参数，页数，从1开始
         */
        pageNum: number
        /**
         * 分页参数，每页条数
         */
        pageSize: number
        /**
         * 应用数量
         */
        total: number
      }
      /**
       * 错误码，有错误时返回
       */
      errorCode: string
      /**
       * 错误信息，有错误时返回
       */
      errorMessage: string
      /**
       * 错误参数，统一错误码的自定义参数
       */
      errorParams: any[]
      /**
       * requestId，请求唯一标识，必须
       */
      requestId: string
      /**
       * 返回状态|枚举值: OK,ERROR,EXCEPTION,FORBIDDEN
       */
      state: string
    }
  }

  /**
   * 接口名：查询用户算力豆明细（获取）
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=477236&itf=2078635
   */
  'POST/accounting/web/computemgr/detail-received': {
    Req: {
      /**
       * 分页参数，页数，从1开始
       */
      pageNum?: number
      /**
       * 分页参数，每页条数
       */
      pageSize?: number
      /**
       * 用户id
       */
      userId?: string
    }
    Res: {
      /**
       * 返回数据
       */
      body: {
        /**
         * 分页参数，页数，从1开始
         */
        pageNum: number
        /**
         * 分页参数，每页条数
         */
        pageSize: number
        /**
         * 应用列表
         */
        data: {
          /**
           * 详情
           */
          details: string
          /**
           * 数量
           */
          count: number
          /**
           * 事项
           */
          item: string
          /**
           * 排序时间，模型训练消耗，时间显示的是实例运行开始时间；算力豆到期，时间显示的是有效期截止的时间；增加算力豆，时间显示的是增加的时间
           */
          orderTime: string
          /**
           * 编号
           */
          id: number
        }[]
        /**
         * 应用数量
         */
        total: number
      }
      /**
       * 错误码，有错误时返回
       */
      errorCode: string
      /**
       * 错误信息，有错误时返回
       */
      errorMessage: string
      /**
       * 错误参数，统一错误码的自定义参数
       */
      errorParams: any[]
      /**
       * requestId，请求唯一标识，必须
       */
      requestId: string
      /**
       * 返回状态|枚举值: OK,ERROR,EXCEPTION,FORBIDDEN
       */
      state: string
    }
  }

  /**
   * 接口名：查询用户算力豆概览
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=477236&itf=2078636
   */
  'GET/accounting/web/computemgr/summary': {
    Req: {
      /**
       * 用户Id
       */
      userId?: string
    }
    Res: {
      /**
       * 返回数据
       */
      body: {
        /**
         * 总消耗
         */
        consumedCount: number
        /**
         * 当前可用
         */
        availableCount: number
        /**
         * 总获取
         */
        receivedCount: number
      }
      /**
       * 错误码，有错误时返回
       */
      errorCode: string
      /**
       * 错误信息，有错误时返回
       */
      errorMessage: string
      /**
       * 错误参数，统一错误码的自定义参数
       */
      errorParams: any[]
      /**
       * requestId，请求唯一标识，必须
       */
      requestId: string
      /**
       * 返回状态|枚举值: OK,ERROR,EXCEPTION,FORBIDDEN
       */
      state: string
    }
  }

  /**
   * 接口名：考生入库并发送邮件
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=477510&itf=2087560
   */
  'POST/examination/sendEmail': {
    Req: {
      /**
       * file
       */
      file?: null
    }
    Res: {
      /**
       * 返回数据
       */
      body: {}
      /**
       * 错误码，有错误时返回
       */
      errorCode: string
      /**
       * 错误信息，有错误时返回
       */
      errorMessage: string
      /**
       * 错误参数，统一错误码的自定义参数
       */
      errorParams: any[]
      /**
       * requestId，请求唯一标识
       */
      requestId: string
      /**
       * 返回状态|枚举值: OK,ERROR,EXCEPTION,FORBIDDEN
       */
      state: string
    }
  }

  /**
   * 接口名：导出考生信息到浏览器
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=477510&itf=2080110
   */
  'GET/examination/exportExamInfo': {
    Req: {
      /**
       * endtime
       */
      endtime?: string
      /**
       * starttime
       */
      starttime?: string
    }
    Res: {
      /**
       * 返回数据
       */
      body: {}
      /**
       * 错误码，有错误时返回
       */
      errorCode: string
      /**
       * 错误信息，有错误时返回
       */
      errorMessage: string
      /**
       * 错误参数，统一错误码的自定义参数
       */
      errorParams: any[]
      /**
       * requestId，请求唯一标识
       */
      requestId: string
      /**
       * 返回状态|枚举值: OK,ERROR,EXCEPTION,FORBIDDEN
       */
      state: string
    }
  }

  /**
   * 接口名：考试管理主页面
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=477510&itf=2080111
   */
  'POST/examination/find/list': {
    Req: {
      /**
       * 试卷名称
       */
      exampapername?: string
      /**
       * pageNum
       */
      pageNum?: number
      /**
       * pageSize
       */
      pageSize?: number
    }
    Res: {
      /**
       * 返回数据
       */
      body: {}
      /**
       * 错误码，有错误时返回
       */
      errorCode: string
      /**
       * 错误信息，有错误时返回
       */
      errorMessage: string
      /**
       * 错误参数，统一错误码的自定义参数
       */
      errorParams: any[]
      /**
       * requestId，请求唯一标识
       */
      requestId: string
      /**
       * 返回状态|枚举值: OK,ERROR,EXCEPTION,FORBIDDEN
       */
      state: string
    }
  }

  /**
   * 接口名：查询考生考试链接
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=477510&itf=2080112
   */
  'POST/examination/queryAddressInfo': {
    Req: {
      /**
       * 是否是登录操作，1为是登录操作
       */
      isLogin?: string
    }
    Res: {
      /**
       * 返回数据
       */
      body: {}
      /**
       * 错误码，有错误时返回
       */
      errorCode: string
      /**
       * 错误信息，有错误时返回
       */
      errorMessage: string
      /**
       * 错误参数，统一错误码的自定义参数
       */
      errorParams: any[]
      /**
       * requestId，请求唯一标识
       */
      requestId: string
      /**
       * 返回状态|枚举值: OK,ERROR,EXCEPTION,FORBIDDEN
       */
      state: string
    }
  }

  /**
   * 接口名：记录学生反馈记录1参加考试2不参加考试3待确定
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=477510&itf=2080113
   */
  'GET/examination/updateExamSta': {
    Req: {
      /**
       * 考生是否参加考试1是2否3待确定
       */
      examsta: string
      /**
       * 流水
       */
      serid: string
      /**
       * 认证码
       */
      strauthcode: string
      /**
       * 考生邮箱
       */
      uemail: string
    }
    Res: {}
  }

  /**
   * 接口名：注销邀请码
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=477237&itf=2078637
   */
  'POST/accounting/web/invitation/cancel-code': {
    Req: {
      /**
       * 待注销邀请码id列表
       */
      codeId?: number
    }
    Res: {
      /**
       * 返回数据
       */
      body: number
      /**
       * 错误码，有错误时返回
       */
      errorCode: string
      /**
       * 错误信息，有错误时返回
       */
      errorMessage: string
      /**
       * 错误参数，统一错误码的自定义参数
       */
      errorParams: any[]
      /**
       * requestId，请求唯一标识，必须
       */
      requestId: string
      /**
       * 返回状态|枚举值: OK,ERROR,EXCEPTION,FORBIDDEN
       */
      state: string
    }
  }

  /**
   * 接口名：创建邀请码
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=477237&itf=2078638
   */
  'POST/accounting/web/invitation/create-code': {
    Req: {
      /**
       * 邀请码数量
       */
      codeCount?: number
      /**
       * 一个邀请码可兑换的算力豆数量
       */
      computeCount?: number
      /**
       * 算力豆到期时间
       */
      computeExpirationTime?: number
      /**
       * 邀请码到期时间
       */
      expirationTime?: number
      /**
       * 事项，不超过20个字符
       */
      item?: string
    }
    Res: {
      /**
       * 返回数据
       */
      body: string
      /**
       * 错误码，有错误时返回
       */
      errorCode: string
      /**
       * 错误信息，有错误时返回
       */
      errorMessage: string
      /**
       * 错误参数，统一错误码的自定义参数
       */
      errorParams: any[]
      /**
       * requestId，请求唯一标识，必须
       */
      requestId: string
      /**
       * 返回状态|枚举值: OK,ERROR,EXCEPTION,FORBIDDEN
       */
      state: string
    }
  }

  /**
   * 接口名：兑换邀请码
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=477237&itf=2078639
   */
  'POST/accounting/web/invitation/exchange-code': {
    Req: {
      /**
       * 邀请码
       */
      code?: string
    }
    Res: {
      /**
       * 返回数据
       */
      body: {
        /**
         * 兑换邀请码获得的算力豆数
         */
        computeCount: number
        /**
         * 用户当前可用的算力豆数
         */
        availableCount: number
      }
      /**
       * 错误码，有错误时返回
       */
      errorCode: string
      /**
       * 错误信息，有错误时返回
       */
      errorMessage: string
      /**
       * 错误参数，统一错误码的自定义参数
       */
      errorParams: any[]
      /**
       * requestId，请求唯一标识，必须
       */
      requestId: string
      /**
       * 返回状态|枚举值: OK,ERROR,EXCEPTION,FORBIDDEN
       */
      state: string
    }
  }

  /**
   * 接口名：查询邀请码详情
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=477237&itf=2078640
   */
  'GET/accounting/web/invitation/query-code': {
    Req: {
      /**
       * 邀请码id
       */
      codeId: number
    }
    Res: {
      /**
       * 返回数据
       */
      body: {
        /**
         * 32位邀请码
         */
        code: string
        /**
         * 算力豆到期日期
         */
        computeExpirationTime: string
        /**
         * 一个邀请码可兑换的算力豆数量
         */
        computeCount: number
        /**
         * 邀请码总数
         */
        count: number
        /**
         * 创建时间
         */
        createdTime: string
        /**
         * 创建管理员名字
         */
        createdBy: string
        /**
         * 邀请码到期日期
         */
        expirationTime: string
        /**
         * 事项，不超过20个字符
         */
        item: string
        /**
         * 邀请码id
         */
        id: number
        /**
         * 已领取数量
         */
        receivedCount: number
        /**
         * 状态-已领完/领取中/已失效
         */
        status: string
      }
      /**
       * 错误码，有错误时返回
       */
      errorCode: string
      /**
       * 错误信息，有错误时返回
       */
      errorMessage: string
      /**
       * 错误参数，统一错误码的自定义参数
       */
      errorParams: any[]
      /**
       * requestId，请求唯一标识，必须
       */
      requestId: string
      /**
       * 返回状态|枚举值: OK,ERROR,EXCEPTION,FORBIDDEN
       */
      state: string
    }
  }

  /**
   * 接口名：查询邀请码列表
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=477237&itf=2078641
   */
  'POST/accounting/web/invitation/query-list': {
    Req: {
      /**
       * 排序方式, true为升序，false为降序
       */
      isAsc?: boolean
      /**
       * 指定的排序列，包括创建时间-createdTime、邀请码到期时间-expirationTime、算力豆到期时间-computeExpirationTime，默认以创建时间降序排序
       */
      orderColumn?: string
      /**
       * 分页参数，页数，从1开始
       */
      pageNum?: number
      /**
       * 分页参数，每页条数
       */
      pageSize?: number
      /**
       * 邀请码状态:0失效,1已领完,2领取中|数据范围: 最小值：-128
       */
      status?: number
    }
    Res: {
      /**
       * 返回数据
       */
      body: {
        /**
         * 应用列表
         */
        data: {
          /**
           * 32位邀请码
           */
          code: string
          /**
           * 一个邀请码可兑换的算力豆数量
           */
          computeCount: number
          /**
           * 算力豆到期日期
           */
          computeExpirationTime: string
          /**
           * 邀请码总数
           */
          count: number
          /**
           * 创建时间
           */
          createdTime: string
          /**
           * 创建管理员名字
           */
          createdBy: string
          /**
           * 邀请码到期日期
           */
          expirationTime: string
          /**
           * 邀请码id
           */
          id: number
          /**
           * 状态-已领完/领取中/已失效
           */
          status: string
          /**
           * 事项，不超过20个字符
           */
          item: string
          /**
           * 已领取数量
           */
          receivedCount: number
        }[]
        /**
         * 分页参数，页数，从1开始
         */
        pageNum: number
        /**
         * 分页参数，每页条数
         */
        pageSize: number
        /**
         * 应用数量
         */
        total: number
      }
      /**
       * 错误码，有错误时返回
       */
      errorCode: string
      /**
       * 错误信息，有错误时返回
       */
      errorMessage: string
      /**
       * 错误参数，统一错误码的自定义参数
       */
      errorParams: any[]
      /**
       * requestId，请求唯一标识，必须
       */
      requestId: string
      /**
       * 返回状态|枚举值: OK,ERROR,EXCEPTION,FORBIDDEN
       */
      state: string
    }
  }

  /**
   * 接口名：查看邀请码领取详情
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=477237&itf=2078642
   */
  'POST/accounting/web/invitation/query-received': {
    Req: {
      /**
       * 邀请码id
       */
      codeId?: number
      /**
       * 分页参数，页数，从1开始
       */
      pageNum?: number
      /**
       * 分页参数，每页条数
       */
      pageSize?: number
      /**
       * 搜索条件
       */
      searchCondition?: string
    }
    Res: {
      /**
       * 返回数据
       */
      body: {
        pageResponse: {
          /**
           * 应用列表
           */
          data: {
            /**
             * 姓名
             */
            name: string
            /**
             * 用户名
             */
            userName: string
            /**
             * 领取时间
             */
            receivedTime: string
            /**
             * 用户id
             */
            userId: string
          }[]
          /**
           * 分页参数，页数，从1开始
           */
          pageNum: number
          /**
           * 分页参数，每页条数
           */
          pageSize: number
          /**
           * 应用数量
           */
          total: number
        }
        computeCount: number
        item: string
      }
      /**
       * 错误码，有错误时返回
       */
      errorCode: string
      /**
       * 错误信息，有错误时返回
       */
      errorMessage: string
      /**
       * 错误参数，统一错误码的自定义参数
       */
      errorParams: any[]
      /**
       * requestId，请求唯一标识，必须
       */
      requestId: string
      /**
       * 返回状态|枚举值: OK,ERROR,EXCEPTION,FORBIDDEN
       */
      state: string
    }
  }

  /**
   * 接口名：查询邀请码编辑记录
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=477237&itf=2078643
   */
  'POST/accounting/web/invitation/query-update': {
    Req: {
      /**
       * 邀请码id
       */
      codeId?: number
      /**
       * 分页参数，页数，从1开始
       */
      pageNum?: number
      /**
       * 分页参数，每页条数
       */
      pageSize?: number
    }
    Res: {
      /**
       * 返回数据
       */
      body: {
        /**
         * 分页参数，页数，从1开始
         */
        pageNum: number
        /**
         * 应用列表
         */
        data: {
          /**
           * 算力豆到期日期
           */
          computeExpirationTime: string
          /**
           * 编辑管理员名字
           */
          modifiedBy: string
          /**
           * 邀请码到期日期
           */
          expirationTime: string
          /**
           * 事项，不超过20个字符
           */
          item: string
          /**
           * 编辑内容
           */
          modifiedContent: string
          /**
           * 编辑时间
           */
          modifiedTime: string
          /**
           * 操作类型
           */
          modifiedType: string
        }[]
        /**
         * 应用数量
         */
        total: number
        /**
         * 分页参数，每页条数
         */
        pageSize: number
      }
      /**
       * 错误码，有错误时返回
       */
      errorCode: string
      /**
       * 错误信息，有错误时返回
       */
      errorMessage: string
      /**
       * 错误参数，统一错误码的自定义参数
       */
      errorParams: any[]
      /**
       * requestId，请求唯一标识，必须
       */
      requestId: string
      /**
       * 返回状态|枚举值: OK,ERROR,EXCEPTION,FORBIDDEN
       */
      state: string
    }
  }

  /**
   * 接口名：编辑邀请码
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=477237&itf=2078644
   */
  'POST/accounting/web/invitation/update-code': {
    Req: {
      /**
       * 算力豆到期时间，2021-09-31T23:59:59Z
       */
      computeExpirationTime?: string
      /**
       * 邀请码到期时间，2021-09-31T23:59:59Z
       */
      expirationTime?: string
      /**
       * 邀请码id
       */
      id?: number
      /**
       * 事项，不超过20个字符
       */
      item?: string
    }
    Res: {
      /**
       * 返回数据
       */
      body: string
      /**
       * 错误码，有错误时返回
       */
      errorCode: string
      /**
       * 错误信息，有错误时返回
       */
      errorMessage: string
      /**
       * 错误参数，统一错误码的自定义参数
       */
      errorParams: any[]
      /**
       * requestId，请求唯一标识，必须
       */
      requestId: string
      /**
       * 返回状态|枚举值: OK,ERROR,EXCEPTION,FORBIDDEN
       */
      state: string
    }
  }

  /**
   * 接口名：获取管理域的cpu,gpu,vgpu,运行实例资源使用情况
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=477623&itf=2080628
   */
  'GET/dp_platform/resource/manager/viewoverview/res_usage': {
    Req: {}
    Res: {
      /**
       * 返回的代码，200表示成功，其他表示失败
       */
      code: number
      /**
       * 成功时返回的数据信息
       */
      data: {}
      /**
       * 成功或失败时返回的错误信息
       */
      msg: string
    }
  }
}

type ResSelector<T> = T

export interface IResponseTypes {
  'POST/keycloak/back/user/batchcreate': ResSelector<IModels['POST/keycloak/back/user/batchcreate']['Res']>
  'GET/keycloak/web/user/count': ResSelector<IModels['GET/keycloak/web/user/count']['Res']>
  'POST/keycloak/back/user/checkuser': ResSelector<IModels['POST/keycloak/back/user/checkuser']['Res']>
  'POST/keycloak/web/user/uploadUsers': ResSelector<IModels['POST/keycloak/web/user/uploadUsers']['Res']>
  'POST/keycloak/back/user/checkusers': ResSelector<IModels['POST/keycloak/back/user/checkusers']['Res']>
  'POST/keycloak/back/user/create': ResSelector<IModels['POST/keycloak/back/user/create']['Res']>
  'GET/keycloak/back/user/getloginstatus': ResSelector<IModels['GET/keycloak/back/user/getloginstatus']['Res']>
  'GET/keycloak/back/user/getuser': ResSelector<IModels['GET/keycloak/back/user/getuser']['Res']>
  'POST/keycloak/back/user/getusers': ResSelector<IModels['POST/keycloak/back/user/getusers']['Res']>
  'POST/keycloak/back/user/regist': ResSelector<IModels['POST/keycloak/back/user/regist']['Res']>
  'GET/keycloak/web/user/countuser': ResSelector<IModels['GET/keycloak/web/user/countuser']['Res']>
  'GET/keycloak/web/user/firstlogin': ResSelector<IModels['GET/keycloak/web/user/firstlogin']['Res']>
  'GET/keycloak/web/user/getuserinfo': ResSelector<IModels['GET/keycloak/web/user/getuserinfo']['Res']>
  'POST/keycloak/web/user/resetpassword': ResSelector<IModels['POST/keycloak/web/user/resetpassword']['Res']>
  'POST/keycloak/web/user/updateuser': ResSelector<IModels['POST/keycloak/web/user/updateuser']['Res']>
  'GET/examination/email/detail': ResSelector<IModels['GET/examination/email/detail']['Res']>
  'GET/examination/email/list': ResSelector<IModels['GET/examination/email/list']['Res']>
  'GET/opera/back/opera/isTaskAllReady': ResSelector<IModels['GET/opera/back/opera/isTaskAllReady']['Res']>
  'GET/opera/back/resource/bills': ResSelector<IModels['GET/opera/back/resource/bills']['Res']>
  'GET/opera/web/computePower/summary': ResSelector<IModels['GET/opera/web/computePower/summary']['Res']>
  'GET/opera/web/cumulativeDuration/summary': ResSelector<IModels['GET/opera/web/cumulativeDuration/summary']['Res']>
  'GET/opera/web/opera/statistics/info': ResSelector<IModels['GET/opera/web/opera/statistics/info']['Res']>
  'GET/opera/web/instance/summary': ResSelector<IModels['GET/opera/web/instance/summary']['Res']>
  'GET/opera/web/opera/summary': ResSelector<IModels['GET/opera/web/opera/summary']['Res']>
  'GET/opera/web/storage/summary': ResSelector<IModels['GET/opera/web/storage/summary']['Res']>
  'POST/opera/web/storage/userDetail': ResSelector<IModels['POST/opera/web/storage/userDetail']['Res']>
  'POST/notice/web/404': ResSelector<IModels['POST/notice/web/404']['Res']>
  'GET/notice/web/omp/getNoticeMessage': ResSelector<IModels['GET/notice/web/omp/getNoticeMessage']['Res']>
  'GET/notice/web/getNoticeMessage': ResSelector<IModels['GET/notice/web/getNoticeMessage']['Res']>
  'GET/notice/web/omp/getNoticeSwitch': ResSelector<IModels['GET/notice/web/omp/getNoticeSwitch']['Res']>
  'GET/notice/web/getNoticeServicePage': ResSelector<IModels['GET/notice/web/getNoticeServicePage']['Res']>
  'GET/notice/web/omp/getPopUpSwitch': ResSelector<IModels['GET/notice/web/omp/getPopUpSwitch']['Res']>
  'GET/notice/web/getNoticeStatus': ResSelector<IModels['GET/notice/web/getNoticeStatus']['Res']>
  'GET/notice/web/getPopUpMessage': ResSelector<IModels['GET/notice/web/getPopUpMessage']['Res']>
  'POST/notice/web/setNoticeMessage': ResSelector<IModels['POST/notice/web/setNoticeMessage']['Res']>
  'GET/notice/web/setNoticeMessagePage': ResSelector<IModels['GET/notice/web/setNoticeMessagePage']['Res']>
  'POST/notice/web/setNoticeSwitch': ResSelector<IModels['POST/notice/web/setNoticeSwitch']['Res']>
  'POST/notice/web/setPopUpMessage': ResSelector<IModels['POST/notice/web/setPopUpMessage']['Res']>
  'POST/notice/web/setPopUpSwitch': ResSelector<IModels['POST/notice/web/setPopUpSwitch']['Res']>
  'GET/notice/web/omp/getPopUpMessage': ResSelector<IModels['GET/notice/web/omp/getPopUpMessage']['Res']>
  'GET/storage/admin/pools': ResSelector<IModels['GET/storage/admin/pools']['Res']>
  'GET/storage/web/pools': ResSelector<IModels['GET/storage/web/pools']['Res']>
  'POST/storage/product/capacity': ResSelector<IModels['POST/storage/product/capacity']['Res']>
  'GET/storage/product/list': ResSelector<IModels['GET/storage/product/list']['Res']>
  'POST/storage/product/storage_status': ResSelector<IModels['POST/storage/product/storage_status']['Res']>
  'POST/storage/product/usage': ResSelector<IModels['POST/storage/product/usage']['Res']>
  'POST/storage/project/initialize': ResSelector<IModels['POST/storage/project/initialize']['Res']>
  'GET/storage/web/initialize': ResSelector<IModels['GET/storage/web/initialize']['Res']>
  'POST/storage/web/storage_user_count': ResSelector<IModels['POST/storage/web/storage_user_count']['Res']>
  'GET/storage/web/usage': ResSelector<IModels['GET/storage/web/usage']['Res']>
  'GET/accounting/back/computemgr/all-consumed': ResSelector<
    IModels['GET/accounting/back/computemgr/all-consumed']['Res']
  >
  'GET/accounting/back/computemgr/available/{userId}': ResSelector<
    IModels['GET/accounting/back/computemgr/available/{userId}']['Res']
  >
  'POST/accounting/back/computemgr/recharge': ResSelector<IModels['POST/accounting/back/computemgr/recharge']['Res']>
  'POST/storage/create': ResSelector<IModels['POST/storage/create']['Res']>
  'POST/storage/delete': ResSelector<IModels['POST/storage/delete']['Res']>
  'POST/storage/pause': ResSelector<IModels['POST/storage/pause']['Res']>
  'POST/storage/resume': ResSelector<IModels['POST/storage/resume']['Res']>
  'GET/storage/search': ResSelector<IModels['GET/storage/search']['Res']>
  'GET/storage/used': ResSelector<IModels['GET/storage/used']['Res']>
  'POST/examination/aloneadd/student': ResSelector<IModels['POST/examination/aloneadd/student']['Res']>
  'GET/examination/exportExample': ResSelector<IModels['GET/examination/exportExample']['Res']>
  'GET/examination/getSearchExamPapername': ResSelector<IModels['GET/examination/getSearchExamPapername']['Res']>
  'POST/examination/batchadd/student': ResSelector<IModels['POST/examination/batchadd/student']['Res']>
  'GET/examination/exportFailedStudent': ResSelector<IModels['GET/examination/exportFailedStudent']['Res']>
  'GET/examination/getExamPapername': ResSelector<IModels['GET/examination/getExamPapername']['Res']>
  'GET/examination/getOrganization': ResSelector<IModels['GET/examination/getOrganization']['Res']>
  'GET/examination/get/exportExamInfoByExampapername': ResSelector<
    IModels['GET/examination/get/exportExamInfoByExampapername']['Res']
  >
  'POST/examination/get/previewHtml': ResSelector<IModels['POST/examination/get/previewHtml']['Res']>
  'GET/examination/get/sendEmailStaNum': ResSelector<IModels['GET/examination/get/sendEmailStaNum']['Res']>
  'POST/examination/find/StudentList': ResSelector<IModels['POST/examination/find/StudentList']['Res']>
  'GET/examination/get/detail': ResSelector<IModels['GET/examination/get/detail']['Res']>
  'POST/examination/off/address': ResSelector<IModels['POST/examination/off/address']['Res']>
  'POST/examination/on/address': ResSelector<IModels['POST/examination/on/address']['Res']>
  'POST/examination/sendExamEmail': ResSelector<IModels['POST/examination/sendExamEmail']['Res']>
  'POST/examination/update/info': ResSelector<IModels['POST/examination/update/info']['Res']>
  'POST/examination/update/whetherexamsta': ResSelector<IModels['POST/examination/update/whetherexamsta']['Res']>
  'GET/keycloak/web/group/count': ResSelector<IModels['GET/keycloak/web/group/count']['Res']>
  'GET/keycloak/web/group/countlevel': ResSelector<IModels['GET/keycloak/web/group/countlevel']['Res']>
  'GET/accounting/web/computemgr/available': ResSelector<IModels['GET/accounting/web/computemgr/available']['Res']>
  'POST/accounting/web/computemgr/detail-all': ResSelector<IModels['POST/accounting/web/computemgr/detail-all']['Res']>
  'POST/accounting/web/computemgr/detail-consumed': ResSelector<
    IModels['POST/accounting/web/computemgr/detail-consumed']['Res']
  >
  'POST/accounting/web/computemgr/detail-received': ResSelector<
    IModels['POST/accounting/web/computemgr/detail-received']['Res']
  >
  'GET/accounting/web/computemgr/summary': ResSelector<IModels['GET/accounting/web/computemgr/summary']['Res']>
  'POST/examination/sendEmail': ResSelector<IModels['POST/examination/sendEmail']['Res']>
  'GET/examination/exportExamInfo': ResSelector<IModels['GET/examination/exportExamInfo']['Res']>
  'POST/examination/find/list': ResSelector<IModels['POST/examination/find/list']['Res']>
  'POST/examination/queryAddressInfo': ResSelector<IModels['POST/examination/queryAddressInfo']['Res']>
  'GET/examination/updateExamSta': ResSelector<IModels['GET/examination/updateExamSta']['Res']>
  'POST/accounting/web/invitation/cancel-code': ResSelector<
    IModels['POST/accounting/web/invitation/cancel-code']['Res']
  >
  'POST/accounting/web/invitation/create-code': ResSelector<
    IModels['POST/accounting/web/invitation/create-code']['Res']
  >
  'POST/accounting/web/invitation/exchange-code': ResSelector<
    IModels['POST/accounting/web/invitation/exchange-code']['Res']
  >
  'GET/accounting/web/invitation/query-code': ResSelector<IModels['GET/accounting/web/invitation/query-code']['Res']>
  'POST/accounting/web/invitation/query-list': ResSelector<IModels['POST/accounting/web/invitation/query-list']['Res']>
  'POST/accounting/web/invitation/query-received': ResSelector<
    IModels['POST/accounting/web/invitation/query-received']['Res']
  >
  'POST/accounting/web/invitation/query-update': ResSelector<
    IModels['POST/accounting/web/invitation/query-update']['Res']
  >
  'POST/accounting/web/invitation/update-code': ResSelector<
    IModels['POST/accounting/web/invitation/update-code']['Res']
  >
  'GET/dp_platform/resource/manager/viewoverview/res_usage': ResSelector<
    IModels['GET/dp_platform/resource/manager/viewoverview/res_usage']['Res']
  >
}

export function createFetch(fetchConfig: commonLib.RequesterOption, extraConfig?: {fetchType?: commonLib.FetchType}) {
  // if (!extraConfig || !extraConfig.fetchType) {
  //   console.warn('Rapper Warning: createFetch API will be deprecated, if you want to customize fetch, please use overrideFetch instead, since new API guarantees better type consistency during frontend lifespan. See detail https://www.yuque.com/rap/rapper/overridefetch')
  // }
  const rapperFetch = commonLib.getRapperRequest(fetchConfig)

  return {
    /**
     * 接口名：批量创建用户
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=476274&itf=2073033
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'POST/keycloak/back/user/batchcreate': (
      req?: IModels['POST/keycloak/back/user/batchcreate']['Req'],
      extra?: commonLib.IExtra
    ) => {
      return rapperFetch({
        url: '/keycloak/back/user/batchcreate',
        method: 'POST',
        params: req,
        extra,
      }) as Promise<IResponseTypes['POST/keycloak/back/user/batchcreate']>
    },

    /**
     * 接口名：查询用户总人数
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=476274&itf=2079712
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/keycloak/web/user/count': (req?: IModels['GET/keycloak/web/user/count']['Req'], extra?: commonLib.IExtra) => {
      return rapperFetch({
        url: '/keycloak/web/user/count',
        method: 'GET',
        params: req,
        extra,
      }) as Promise<IResponseTypes['GET/keycloak/web/user/count']>
    },

    /**
     * 接口名：查看用户是否存在
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=476274&itf=2073034
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'POST/keycloak/back/user/checkuser': (
      req?: IModels['POST/keycloak/back/user/checkuser']['Req'],
      extra?: commonLib.IExtra
    ) => {
      return rapperFetch({
        url: '/keycloak/back/user/checkuser',
        method: 'POST',
        params: req,
        extra,
      }) as Promise<IResponseTypes['POST/keycloak/back/user/checkuser']>
    },

    /**
     * 接口名：批量导入用户
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=476274&itf=2079713
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'POST/keycloak/web/user/uploadUsers': (
      req?: IModels['POST/keycloak/web/user/uploadUsers']['Req'],
      extra?: commonLib.IExtra
    ) => {
      return rapperFetch({
        url: '/keycloak/web/user/uploadUsers',
        method: 'POST',
        params: req,
        extra,
      }) as Promise<IResponseTypes['POST/keycloak/web/user/uploadUsers']>
    },

    /**
     * 接口名：检查用户信息
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=476274&itf=2073035
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'POST/keycloak/back/user/checkusers': (
      req?: IModels['POST/keycloak/back/user/checkusers']['Req'],
      extra?: commonLib.IExtra
    ) => {
      return rapperFetch({
        url: '/keycloak/back/user/checkusers',
        method: 'POST',
        params: req,
        extra,
      }) as Promise<IResponseTypes['POST/keycloak/back/user/checkusers']>
    },

    /**
     * 接口名：创建用户
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=476274&itf=2073036
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'POST/keycloak/back/user/create': (
      req?: IModels['POST/keycloak/back/user/create']['Req'],
      extra?: commonLib.IExtra
    ) => {
      return rapperFetch({
        url: '/keycloak/back/user/create',
        method: 'POST',
        params: req,
        extra,
      }) as Promise<IResponseTypes['POST/keycloak/back/user/create']>
    },

    /**
     * 接口名：查看用户登录状态
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=476274&itf=2073037
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/keycloak/back/user/getloginstatus': (
      req?: IModels['GET/keycloak/back/user/getloginstatus']['Req'],
      extra?: commonLib.IExtra
    ) => {
      return rapperFetch({
        url: '/keycloak/back/user/getloginstatus',
        method: 'GET',
        params: req,
        extra,
      }) as Promise<IResponseTypes['GET/keycloak/back/user/getloginstatus']>
    },

    /**
     * 接口名：查询用户信息
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=476274&itf=2073038
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/keycloak/back/user/getuser': (
      req?: IModels['GET/keycloak/back/user/getuser']['Req'],
      extra?: commonLib.IExtra
    ) => {
      return rapperFetch({
        url: '/keycloak/back/user/getuser',
        method: 'GET',
        params: req,
        extra,
      }) as Promise<IResponseTypes['GET/keycloak/back/user/getuser']>
    },

    /**
     * 接口名：批量查询用户信息
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=476274&itf=2073039
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'POST/keycloak/back/user/getusers': (
      req?: IModels['POST/keycloak/back/user/getusers']['Req'],
      extra?: commonLib.IExtra
    ) => {
      return rapperFetch({
        url: '/keycloak/back/user/getusers',
        method: 'POST',
        params: req,
        extra,
      }) as Promise<IResponseTypes['POST/keycloak/back/user/getusers']>
    },

    /**
     * 接口名：注册用户
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=476274&itf=2073040
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'POST/keycloak/back/user/regist': (
      req?: IModels['POST/keycloak/back/user/regist']['Req'],
      extra?: commonLib.IExtra
    ) => {
      return rapperFetch({
        url: '/keycloak/back/user/regist',
        method: 'POST',
        params: req,
        extra,
      }) as Promise<IResponseTypes['POST/keycloak/back/user/regist']>
    },

    /**
     * 接口名：学习人数
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=476274&itf=2073041
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/keycloak/web/user/countuser': (
      req?: IModels['GET/keycloak/web/user/countuser']['Req'],
      extra?: commonLib.IExtra
    ) => {
      return rapperFetch({
        url: '/keycloak/web/user/countuser',
        method: 'GET',
        params: req,
        extra,
      }) as Promise<IResponseTypes['GET/keycloak/web/user/countuser']>
    },

    /**
     * 接口名：验证第一次登录
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=476274&itf=2073042
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/keycloak/web/user/firstlogin': (
      req?: IModels['GET/keycloak/web/user/firstlogin']['Req'],
      extra?: commonLib.IExtra
    ) => {
      return rapperFetch({
        url: '/keycloak/web/user/firstlogin',
        method: 'GET',
        params: req,
        extra,
      }) as Promise<IResponseTypes['GET/keycloak/web/user/firstlogin']>
    },

    /**
     * 接口名：查询用户信息
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=476274&itf=2073043
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/keycloak/web/user/getuserinfo': (
      req?: IModels['GET/keycloak/web/user/getuserinfo']['Req'],
      extra?: commonLib.IExtra
    ) => {
      return rapperFetch({
        url: '/keycloak/web/user/getuserinfo',
        method: 'GET',
        params: req,
        extra,
      }) as Promise<IResponseTypes['GET/keycloak/web/user/getuserinfo']>
    },

    /**
     * 接口名：修改密码
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=476274&itf=2073044
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'POST/keycloak/web/user/resetpassword': (
      req?: IModels['POST/keycloak/web/user/resetpassword']['Req'],
      extra?: commonLib.IExtra
    ) => {
      return rapperFetch({
        url: '/keycloak/web/user/resetpassword',
        method: 'POST',
        params: req,
        extra,
      }) as Promise<IResponseTypes['POST/keycloak/web/user/resetpassword']>
    },

    /**
     * 接口名：修改用户信息
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=476274&itf=2073045
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'POST/keycloak/web/user/updateuser': (
      req?: IModels['POST/keycloak/web/user/updateuser']['Req'],
      extra?: commonLib.IExtra
    ) => {
      return rapperFetch({
        url: '/keycloak/web/user/updateuser',
        method: 'POST',
        params: req,
        extra,
      }) as Promise<IResponseTypes['POST/keycloak/web/user/updateuser']>
    },

    /**
     * 接口名：邮件详情
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=479626&itf=2091669
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/examination/email/detail': (
      req?: IModels['GET/examination/email/detail']['Req'],
      extra?: commonLib.IExtra
    ) => {
      return rapperFetch({
        url: '/examination/email/detail',
        method: 'GET',
        params: req,
        extra,
      }) as Promise<IResponseTypes['GET/examination/email/detail']>
    },

    /**
     * 接口名：邮件记录
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=479626&itf=2091670
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/examination/email/list': (req?: IModels['GET/examination/email/list']['Req'], extra?: commonLib.IExtra) => {
      return rapperFetch({
        url: '/examination/email/list',
        method: 'GET',
        params: req,
        extra,
      }) as Promise<IResponseTypes['GET/examination/email/list']>
    },

    /**
     * 接口名：扫描定时任务是否有漏，如果有漏则自动补充话单
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=479932&itf=2093229
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/opera/back/opera/isTaskAllReady': (
      req?: IModels['GET/opera/back/opera/isTaskAllReady']['Req'],
      extra?: commonLib.IExtra
    ) => {
      return rapperFetch({
        url: '/opera/back/opera/isTaskAllReady',
        method: 'GET',
        params: req,
        extra,
      }) as Promise<IResponseTypes['GET/opera/back/opera/isTaskAllReady']>
    },

    /**
     * 接口名：资源微服务详单查询接口
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=479932&itf=2093230
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/opera/back/resource/bills': (
      req?: IModels['GET/opera/back/resource/bills']['Req'],
      extra?: commonLib.IExtra
    ) => {
      return rapperFetch({
        url: '/opera/back/resource/bills',
        method: 'GET',
        params: req,
        extra,
      }) as Promise<IResponseTypes['GET/opera/back/resource/bills']>
    },

    /**
     * 接口名：算力统计接口
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=479292&itf=2089904
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/opera/web/computePower/summary': (
      req?: IModels['GET/opera/web/computePower/summary']['Req'],
      extra?: commonLib.IExtra
    ) => {
      return rapperFetch({
        url: '/opera/web/computePower/summary',
        method: 'GET',
        params: req,
        extra,
      }) as Promise<IResponseTypes['GET/opera/web/computePower/summary']>
    },

    /**
     * 接口名：累计时长统计接口
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=479292&itf=2089905
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/opera/web/cumulativeDuration/summary': (
      req?: IModels['GET/opera/web/cumulativeDuration/summary']['Req'],
      extra?: commonLib.IExtra
    ) => {
      return rapperFetch({
        url: '/opera/web/cumulativeDuration/summary',
        method: 'GET',
        params: req,
        extra,
      }) as Promise<IResponseTypes['GET/opera/web/cumulativeDuration/summary']>
    },

    /**
     * 接口名：获取统计的开始时间
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=479292&itf=2093232
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/opera/web/opera/statistics/info': (
      req?: IModels['GET/opera/web/opera/statistics/info']['Req'],
      extra?: commonLib.IExtra
    ) => {
      return rapperFetch({
        url: '/opera/web/opera/statistics/info',
        method: 'GET',
        params: req,
        extra,
      }) as Promise<IResponseTypes['GET/opera/web/opera/statistics/info']>
    },

    /**
     * 接口名：实例统计接口
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=479292&itf=2089906
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/opera/web/instance/summary': (
      req?: IModels['GET/opera/web/instance/summary']['Req'],
      extra?: commonLib.IExtra
    ) => {
      return rapperFetch({
        url: '/opera/web/instance/summary',
        method: 'GET',
        params: req,
        extra,
      }) as Promise<IResponseTypes['GET/opera/web/instance/summary']>
    },

    /**
     * 接口名：累计使用情况汇总
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=479292&itf=2089907
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/opera/web/opera/summary': (req?: IModels['GET/opera/web/opera/summary']['Req'], extra?: commonLib.IExtra) => {
      return rapperFetch({
        url: '/opera/web/opera/summary',
        method: 'GET',
        params: req,
        extra,
      }) as Promise<IResponseTypes['GET/opera/web/opera/summary']>
    },

    /**
     * 接口名：存储统计接口
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=479292&itf=2089908
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/opera/web/storage/summary': (
      req?: IModels['GET/opera/web/storage/summary']['Req'],
      extra?: commonLib.IExtra
    ) => {
      return rapperFetch({
        url: '/opera/web/storage/summary',
        method: 'GET',
        params: req,
        extra,
      }) as Promise<IResponseTypes['GET/opera/web/storage/summary']>
    },

    /**
     * 接口名：存储占用情况详细
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=479292&itf=2089909
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'POST/opera/web/storage/userDetail': (
      req?: IModels['POST/opera/web/storage/userDetail']['Req'],
      extra?: commonLib.IExtra
    ) => {
      return rapperFetch({
        url: '/opera/web/storage/userDetail',
        method: 'POST',
        params: req,
        extra,
      }) as Promise<IResponseTypes['POST/opera/web/storage/userDetail']>
    },

    /**
     * 接口名：用户端404
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=476949&itf=2077035
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'POST/notice/web/404': (req?: IModels['POST/notice/web/404']['Req'], extra?: commonLib.IExtra) => {
      return rapperFetch({
        url: '/notice/web/404',
        method: 'POST',
        params: req,
        extra,
      }) as Promise<IResponseTypes['POST/notice/web/404']>
    },

    /**
     * 接口名：运管端获取变更中维护页面信息
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=476949&itf=2080352
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/notice/web/omp/getNoticeMessage': (
      req?: IModels['GET/notice/web/omp/getNoticeMessage']['Req'],
      extra?: commonLib.IExtra
    ) => {
      return rapperFetch({
        url: '/notice/web/omp/getNoticeMessage',
        method: 'GET',
        params: req,
        extra,
      }) as Promise<IResponseTypes['GET/notice/web/omp/getNoticeMessage']>
    },

    /**
     * 接口名：获取变更中维护页面信息
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=476949&itf=2077036
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/notice/web/getNoticeMessage': (
      req?: IModels['GET/notice/web/getNoticeMessage']['Req'],
      extra?: commonLib.IExtra
    ) => {
      return rapperFetch({
        url: '/notice/web/getNoticeMessage',
        method: 'GET',
        params: req,
        extra,
      }) as Promise<IResponseTypes['GET/notice/web/getNoticeMessage']>
    },

    /**
     * 接口名：运管端获取变更中维护页面状态
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=476949&itf=2080353
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/notice/web/omp/getNoticeSwitch': (
      req?: IModels['GET/notice/web/omp/getNoticeSwitch']['Req'],
      extra?: commonLib.IExtra
    ) => {
      return rapperFetch({
        url: '/notice/web/omp/getNoticeSwitch',
        method: 'GET',
        params: req,
        extra,
      }) as Promise<IResponseTypes['GET/notice/web/omp/getNoticeSwitch']>
    },

    /**
     * 接口名：变更中维护页面
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=476949&itf=2077037
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/notice/web/getNoticeServicePage': (
      req?: IModels['GET/notice/web/getNoticeServicePage']['Req'],
      extra?: commonLib.IExtra
    ) => {
      return rapperFetch({
        url: '/notice/web/getNoticeServicePage',
        method: 'GET',
        params: req,
        extra,
      }) as Promise<IResponseTypes['GET/notice/web/getNoticeServicePage']>
    },

    /**
     * 接口名：运管端获取变更前弹窗状态
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=476949&itf=2080354
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/notice/web/omp/getPopUpSwitch': (
      req?: IModels['GET/notice/web/omp/getPopUpSwitch']['Req'],
      extra?: commonLib.IExtra
    ) => {
      return rapperFetch({
        url: '/notice/web/omp/getPopUpSwitch',
        method: 'GET',
        params: req,
        extra,
      }) as Promise<IResponseTypes['GET/notice/web/omp/getPopUpSwitch']>
    },

    /**
     * 接口名：获取变更中维护页面状态
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=476949&itf=2077038
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/notice/web/getNoticeStatus': (
      req?: IModels['GET/notice/web/getNoticeStatus']['Req'],
      extra?: commonLib.IExtra
    ) => {
      return rapperFetch({
        url: '/notice/web/getNoticeStatus',
        method: 'GET',
        params: req,
        extra,
      }) as Promise<IResponseTypes['GET/notice/web/getNoticeStatus']>
    },

    /**
     * 接口名：用户端获取变更前弹窗信息
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=476949&itf=2077039
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/notice/web/getPopUpMessage': (
      req?: IModels['GET/notice/web/getPopUpMessage']['Req'],
      extra?: commonLib.IExtra
    ) => {
      return rapperFetch({
        url: '/notice/web/getPopUpMessage',
        method: 'GET',
        params: req,
        extra,
      }) as Promise<IResponseTypes['GET/notice/web/getPopUpMessage']>
    },

    /**
     * 接口名：设置变更中维护页面信息
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=476949&itf=2077040
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'POST/notice/web/setNoticeMessage': (
      req?: IModels['POST/notice/web/setNoticeMessage']['Req'],
      extra?: commonLib.IExtra
    ) => {
      return rapperFetch({
        url: '/notice/web/setNoticeMessage',
        method: 'POST',
        params: req,
        extra,
      }) as Promise<IResponseTypes['POST/notice/web/setNoticeMessage']>
    },

    /**
     * 接口名：设置维护中维护页面内容
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=476949&itf=2077041
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/notice/web/setNoticeMessagePage': (
      req?: IModels['GET/notice/web/setNoticeMessagePage']['Req'],
      extra?: commonLib.IExtra
    ) => {
      return rapperFetch({
        url: '/notice/web/setNoticeMessagePage',
        method: 'GET',
        params: req,
        extra,
      }) as Promise<IResponseTypes['GET/notice/web/setNoticeMessagePage']>
    },

    /**
     * 接口名：控制变更中维护页面开关
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=476949&itf=2077042
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'POST/notice/web/setNoticeSwitch': (
      req?: IModels['POST/notice/web/setNoticeSwitch']['Req'],
      extra?: commonLib.IExtra
    ) => {
      return rapperFetch({
        url: '/notice/web/setNoticeSwitch',
        method: 'POST',
        params: req,
        extra,
      }) as Promise<IResponseTypes['POST/notice/web/setNoticeSwitch']>
    },

    /**
     * 接口名：设置变更前弹窗信息
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=476949&itf=2077043
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'POST/notice/web/setPopUpMessage': (
      req?: IModels['POST/notice/web/setPopUpMessage']['Req'],
      extra?: commonLib.IExtra
    ) => {
      return rapperFetch({
        url: '/notice/web/setPopUpMessage',
        method: 'POST',
        params: req,
        extra,
      }) as Promise<IResponseTypes['POST/notice/web/setPopUpMessage']>
    },

    /**
     * 接口名：控制变更前弹窗开关
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=476949&itf=2077044
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'POST/notice/web/setPopUpSwitch': (
      req?: IModels['POST/notice/web/setPopUpSwitch']['Req'],
      extra?: commonLib.IExtra
    ) => {
      return rapperFetch({
        url: '/notice/web/setPopUpSwitch',
        method: 'POST',
        params: req,
        extra,
      }) as Promise<IResponseTypes['POST/notice/web/setPopUpSwitch']>
    },

    /**
     * 接口名：运管端获取变更前弹窗信息
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=476949&itf=2078603
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/notice/web/omp/getPopUpMessage': (
      req?: IModels['GET/notice/web/omp/getPopUpMessage']['Req'],
      extra?: commonLib.IExtra
    ) => {
      return rapperFetch({
        url: '/notice/web/omp/getPopUpMessage',
        method: 'GET',
        params: req,
        extra,
      }) as Promise<IResponseTypes['GET/notice/web/omp/getPopUpMessage']>
    },

    /**
     * 接口名：存储池容量查询
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=478298&itf=2084592
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/storage/admin/pools': (req?: IModels['GET/storage/admin/pools']['Req'], extra?: commonLib.IExtra) => {
      return rapperFetch({
        url: '/storage/admin/pools',
        method: 'GET',
        params: req,
        extra,
      }) as Promise<IResponseTypes['GET/storage/admin/pools']>
    },

    /**
     * 接口名：存储池容量查询(给前端用）
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=478298&itf=2087038
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/storage/web/pools': (req?: IModels['GET/storage/web/pools']['Req'], extra?: commonLib.IExtra) => {
      return rapperFetch({
        url: '/storage/web/pools',
        method: 'GET',
        params: req,
        extra,
      }) as Promise<IResponseTypes['GET/storage/web/pools']>
    },

    /**
     * 接口名：用户扩缩容接口
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=478298&itf=2084593
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'POST/storage/product/capacity': (
      req?: IModels['POST/storage/product/capacity']['Req'],
      extra?: commonLib.IExtra
    ) => {
      return rapperFetch({
        url: '/storage/product/capacity',
        method: 'POST',
        params: req,
        extra,
      }) as Promise<IResponseTypes['POST/storage/product/capacity']>
    },

    /**
     * 接口名：用户存储记录列表接口
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=478298&itf=2084594
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/storage/product/list': (req?: IModels['GET/storage/product/list']['Req'], extra?: commonLib.IExtra) => {
      return rapperFetch({
        url: '/storage/product/list',
        method: 'GET',
        params: req,
        extra,
      }) as Promise<IResponseTypes['GET/storage/product/list']>
    },

    /**
     * 接口名：用户话单查询
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=478298&itf=2084595
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'POST/storage/product/storage_status': (
      req?: IModels['POST/storage/product/storage_status']['Req'],
      extra?: commonLib.IExtra
    ) => {
      return rapperFetch({
        url: '/storage/product/storage_status',
        method: 'POST',
        params: req,
        extra,
      }) as Promise<IResponseTypes['POST/storage/product/storage_status']>
    },

    /**
     * 接口名：用户资源查询接口
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=478298&itf=2084596
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'POST/storage/product/usage': (req?: IModels['POST/storage/product/usage']['Req'], extra?: commonLib.IExtra) => {
      return rapperFetch({
        url: '/storage/product/usage',
        method: 'POST',
        params: req,
        extra,
      }) as Promise<IResponseTypes['POST/storage/product/usage']>
    },

    /**
     * 接口名：项目资源初始化
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=478298&itf=2084597
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'POST/storage/project/initialize': (
      req?: IModels['POST/storage/project/initialize']['Req'],
      extra?: commonLib.IExtra
    ) => {
      return rapperFetch({
        url: '/storage/project/initialize',
        method: 'POST',
        params: req,
        extra,
      }) as Promise<IResponseTypes['POST/storage/project/initialize']>
    },

    /**
     * 接口名：用户资源初始化
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=478298&itf=2084598
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/storage/web/initialize': (req?: IModels['GET/storage/web/initialize']['Req'], extra?: commonLib.IExtra) => {
      return rapperFetch({
        url: '/storage/web/initialize',
        method: 'GET',
        params: req,
        extra,
      }) as Promise<IResponseTypes['GET/storage/web/initialize']>
    },

    /**
     * 接口名：用户数量查询
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=478298&itf=2084599
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'POST/storage/web/storage_user_count': (
      req?: IModels['POST/storage/web/storage_user_count']['Req'],
      extra?: commonLib.IExtra
    ) => {
      return rapperFetch({
        url: '/storage/web/storage_user_count',
        method: 'POST',
        params: req,
        extra,
      }) as Promise<IResponseTypes['POST/storage/web/storage_user_count']>
    },

    /**
     * 接口名：用户资源查询接口
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=478298&itf=2084600
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/storage/web/usage': (req?: IModels['GET/storage/web/usage']['Req'], extra?: commonLib.IExtra) => {
      return rapperFetch({
        url: '/storage/web/usage',
        method: 'GET',
        params: req,
        extra,
      }) as Promise<IResponseTypes['GET/storage/web/usage']>
    },

    /**
     * 接口名：查询某个时间范围内算力豆消费情况
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=477235&itf=2078629
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/accounting/back/computemgr/all-consumed': (
      req?: IModels['GET/accounting/back/computemgr/all-consumed']['Req'],
      extra?: commonLib.IExtra
    ) => {
      return rapperFetch({
        url: '/accounting/back/computemgr/all-consumed',
        method: 'GET',
        params: req,
        extra,
      }) as Promise<IResponseTypes['GET/accounting/back/computemgr/all-consumed']>
    },

    /**
     * 接口名：查询用户当前可用算力豆及套餐规格
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=477235&itf=2078630
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/accounting/back/computemgr/available/{userId}': (
      req?: IModels['GET/accounting/back/computemgr/available/{userId}']['Req'],
      extra?: commonLib.IExtra
    ) => {
      return rapperFetch({
        url: '/accounting/back/computemgr/available/{userId}',
        method: 'GET',
        params: req,
        extra,
      }) as Promise<IResponseTypes['GET/accounting/back/computemgr/available/{userId}']>
    },

    /**
     * 接口名：给用户的算力豆账户充值
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=477235&itf=2078631
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'POST/accounting/back/computemgr/recharge': (
      req?: IModels['POST/accounting/back/computemgr/recharge']['Req'],
      extra?: commonLib.IExtra
    ) => {
      return rapperFetch({
        url: '/accounting/back/computemgr/recharge',
        method: 'POST',
        params: req,
        extra,
      }) as Promise<IResponseTypes['POST/accounting/back/computemgr/recharge']>
    },

    /**
     * 接口名：资源创建接口
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=478299&itf=2084601
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'POST/storage/create': (req?: IModels['POST/storage/create']['Req'], extra?: commonLib.IExtra) => {
      return rapperFetch({
        url: '/storage/create',
        method: 'POST',
        params: req,
        extra,
      }) as Promise<IResponseTypes['POST/storage/create']>
    },

    /**
     * 接口名：资源删除接口
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=478299&itf=2084602
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'POST/storage/delete': (req?: IModels['POST/storage/delete']['Req'], extra?: commonLib.IExtra) => {
      return rapperFetch({
        url: '/storage/delete',
        method: 'POST',
        params: req,
        extra,
      }) as Promise<IResponseTypes['POST/storage/delete']>
    },

    /**
     * 接口名：资源暂停接口
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=478299&itf=2084603
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'POST/storage/pause': (req?: IModels['POST/storage/pause']['Req'], extra?: commonLib.IExtra) => {
      return rapperFetch({
        url: '/storage/pause',
        method: 'POST',
        params: req,
        extra,
      }) as Promise<IResponseTypes['POST/storage/pause']>
    },

    /**
     * 接口名：资源恢复接口
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=478299&itf=2084604
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'POST/storage/resume': (req?: IModels['POST/storage/resume']['Req'], extra?: commonLib.IExtra) => {
      return rapperFetch({
        url: '/storage/resume',
        method: 'POST',
        params: req,
        extra,
      }) as Promise<IResponseTypes['POST/storage/resume']>
    },

    /**
     * 接口名：资源查询接口
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=478299&itf=2084605
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/storage/search': (req?: IModels['GET/storage/search']['Req'], extra?: commonLib.IExtra) => {
      return rapperFetch({
        url: '/storage/search',
        method: 'GET',
        params: req,
        extra,
      }) as Promise<IResponseTypes['GET/storage/search']>
    },

    /**
     * 接口名：资源计量接口
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=478299&itf=2084606
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/storage/used': (req?: IModels['GET/storage/used']['Req'], extra?: commonLib.IExtra) => {
      return rapperFetch({
        url: '/storage/used',
        method: 'GET',
        params: req,
        extra,
      }) as Promise<IResponseTypes['GET/storage/used']>
    },

    /**
     * 接口名：单独添加考生
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=477509&itf=2080105
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'POST/examination/aloneadd/student': (
      req?: IModels['POST/examination/aloneadd/student']['Req'],
      extra?: commonLib.IExtra
    ) => {
      return rapperFetch({
        url: '/examination/aloneadd/student',
        method: 'POST',
        params: req,
        extra,
      }) as Promise<IResponseTypes['POST/examination/aloneadd/student']>
    },

    /**
     * 接口名：下载表格样例
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=477509&itf=2086357
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/examination/exportExample': (
      req?: IModels['GET/examination/exportExample']['Req'],
      extra?: commonLib.IExtra
    ) => {
      return rapperFetch({
        url: '/examination/exportExample',
        method: 'GET',
        params: req,
        extra,
      }) as Promise<IResponseTypes['GET/examination/exportExample']>
    },

    /**
     * 接口名：考生列表搜索框中获取试卷名称
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=477509&itf=2096642
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/examination/getSearchExamPapername': (
      req?: IModels['GET/examination/getSearchExamPapername']['Req'],
      extra?: commonLib.IExtra
    ) => {
      return rapperFetch({
        url: '/examination/getSearchExamPapername',
        method: 'GET',
        params: req,
        extra,
      }) as Promise<IResponseTypes['GET/examination/getSearchExamPapername']>
    },

    /**
     * 接口名：批量添加考生
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=477509&itf=2080106
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'POST/examination/batchadd/student': (
      req?: IModels['POST/examination/batchadd/student']['Req'],
      extra?: commonLib.IExtra
    ) => {
      return rapperFetch({
        url: '/examination/batchadd/student',
        method: 'POST',
        params: req,
        extra,
      }) as Promise<IResponseTypes['POST/examination/batchadd/student']>
    },

    /**
     * 接口名：下载失败考生列表
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=477509&itf=2080107
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/examination/exportFailedStudent': (
      req?: IModels['GET/examination/exportFailedStudent']['Req'],
      extra?: commonLib.IExtra
    ) => {
      return rapperFetch({
        url: '/examination/exportFailedStudent',
        method: 'GET',
        params: req,
        extra,
      }) as Promise<IResponseTypes['GET/examination/exportFailedStudent']>
    },

    /**
     * 接口名：单独添加考生中获取试卷名称
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=477509&itf=2080108
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/examination/getExamPapername': (
      req?: IModels['GET/examination/getExamPapername']['Req'],
      extra?: commonLib.IExtra
    ) => {
      return rapperFetch({
        url: '/examination/getExamPapername',
        method: 'GET',
        params: req,
        extra,
      }) as Promise<IResponseTypes['GET/examination/getExamPapername']>
    },

    /**
     * 接口名：单独添加考生中获取一级组织
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=477509&itf=2080109
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/examination/getOrganization': (
      req?: IModels['GET/examination/getOrganization']['Req'],
      extra?: commonLib.IExtra
    ) => {
      return rapperFetch({
        url: '/examination/getOrganization',
        method: 'GET',
        params: req,
        extra,
      }) as Promise<IResponseTypes['GET/examination/getOrganization']>
    },

    /**
     * 接口名：根据试卷导出学生信息
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=477511&itf=2095854
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/examination/get/exportExamInfoByExampapername': (
      req?: IModels['GET/examination/get/exportExamInfoByExampapername']['Req'],
      extra?: commonLib.IExtra
    ) => {
      return rapperFetch({
        url: '/examination/get/exportExamInfoByExampapername',
        method: 'GET',
        params: req,
        extra,
      }) as Promise<IResponseTypes['GET/examination/get/exportExamInfoByExampapername']>
    },

    /**
     * 接口名：预览邮件主体
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=477511&itf=2087561
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'POST/examination/get/previewHtml': (
      req?: IModels['POST/examination/get/previewHtml']['Req'],
      extra?: commonLib.IExtra
    ) => {
      return rapperFetch({
        url: '/examination/get/previewHtml',
        method: 'POST',
        params: req,
        extra,
      }) as Promise<IResponseTypes['POST/examination/get/previewHtml']>
    },

    /**
     * 接口名：发送邮件中各个状态人数
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=477511&itf=2095855
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/examination/get/sendEmailStaNum': (
      req?: IModels['GET/examination/get/sendEmailStaNum']['Req'],
      extra?: commonLib.IExtra
    ) => {
      return rapperFetch({
        url: '/examination/get/sendEmailStaNum',
        method: 'GET',
        params: req,
        extra,
      }) as Promise<IResponseTypes['GET/examination/get/sendEmailStaNum']>
    },

    /**
     * 接口名：考生管理主页面
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=477511&itf=2080114
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'POST/examination/find/StudentList': (
      req?: IModels['POST/examination/find/StudentList']['Req'],
      extra?: commonLib.IExtra
    ) => {
      return rapperFetch({
        url: '/examination/find/StudentList',
        method: 'POST',
        params: req,
        extra,
      }) as Promise<IResponseTypes['POST/examination/find/StudentList']>
    },

    /**
     * 接口名：根据uphone手机号查看考生详情
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=477511&itf=2080115
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/examination/get/detail': (req?: IModels['GET/examination/get/detail']['Req'], extra?: commonLib.IExtra) => {
      return rapperFetch({
        url: '/examination/get/detail',
        method: 'GET',
        params: req,
        extra,
      }) as Promise<IResponseTypes['GET/examination/get/detail']>
    },

    /**
     * 接口名：注销考试链接
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=477511&itf=2080116
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'POST/examination/off/address': (
      req?: IModels['POST/examination/off/address']['Req'],
      extra?: commonLib.IExtra
    ) => {
      return rapperFetch({
        url: '/examination/off/address',
        method: 'POST',
        params: req,
        extra,
      }) as Promise<IResponseTypes['POST/examination/off/address']>
    },

    /**
     * 接口名：生成考试链接
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=477511&itf=2080117
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'POST/examination/on/address': (req?: IModels['POST/examination/on/address']['Req'], extra?: commonLib.IExtra) => {
      return rapperFetch({
        url: '/examination/on/address',
        method: 'POST',
        params: req,
        extra,
      }) as Promise<IResponseTypes['POST/examination/on/address']>
    },

    /**
     * 接口名：发送邮件
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=477511&itf=2080118
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'POST/examination/sendExamEmail': (
      req?: IModels['POST/examination/sendExamEmail']['Req'],
      extra?: commonLib.IExtra
    ) => {
      return rapperFetch({
        url: '/examination/sendExamEmail',
        method: 'POST',
        params: req,
        extra,
      }) as Promise<IResponseTypes['POST/examination/sendExamEmail']>
    },

    /**
     * 接口名：编辑考生信息
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=477511&itf=2080119
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'POST/examination/update/info': (
      req?: IModels['POST/examination/update/info']['Req'],
      extra?: commonLib.IExtra
    ) => {
      return rapperFetch({
        url: '/examination/update/info',
        method: 'POST',
        params: req,
        extra,
      }) as Promise<IResponseTypes['POST/examination/update/info']>
    },

    /**
     * 接口名：修改可考状态
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=477511&itf=2080120
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'POST/examination/update/whetherexamsta': (
      req?: IModels['POST/examination/update/whetherexamsta']['Req'],
      extra?: commonLib.IExtra
    ) => {
      return rapperFetch({
        url: '/examination/update/whetherexamsta',
        method: 'POST',
        params: req,
        extra,
      }) as Promise<IResponseTypes['POST/examination/update/whetherexamsta']>
    },

    /**
     * 接口名：查询组织总数
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=477445&itf=2079714
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/keycloak/web/group/count': (
      req?: IModels['GET/keycloak/web/group/count']['Req'],
      extra?: commonLib.IExtra
    ) => {
      return rapperFetch({
        url: '/keycloak/web/group/count',
        method: 'GET',
        params: req,
        extra,
      }) as Promise<IResponseTypes['GET/keycloak/web/group/count']>
    },

    /**
     * 接口名：按组织级别查询组织数
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=477445&itf=2079715
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/keycloak/web/group/countlevel': (
      req?: IModels['GET/keycloak/web/group/countlevel']['Req'],
      extra?: commonLib.IExtra
    ) => {
      return rapperFetch({
        url: '/keycloak/web/group/countlevel',
        method: 'GET',
        params: req,
        extra,
      }) as Promise<IResponseTypes['GET/keycloak/web/group/countlevel']>
    },

    /**
     * 接口名：查询用户当前可用算力豆及套餐规格
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=477236&itf=2078632
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/accounting/web/computemgr/available': (
      req?: IModels['GET/accounting/web/computemgr/available']['Req'],
      extra?: commonLib.IExtra
    ) => {
      return rapperFetch({
        url: '/accounting/web/computemgr/available',
        method: 'GET',
        params: req,
        extra,
      }) as Promise<IResponseTypes['GET/accounting/web/computemgr/available']>
    },

    /**
     * 接口名：查询用户算力豆明细（全部）
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=477236&itf=2078633
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'POST/accounting/web/computemgr/detail-all': (
      req?: IModels['POST/accounting/web/computemgr/detail-all']['Req'],
      extra?: commonLib.IExtra
    ) => {
      return rapperFetch({
        url: '/accounting/web/computemgr/detail-all',
        method: 'POST',
        params: req,
        extra,
      }) as Promise<IResponseTypes['POST/accounting/web/computemgr/detail-all']>
    },

    /**
     * 接口名：查询用户算力豆明细（消费）
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=477236&itf=2078634
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'POST/accounting/web/computemgr/detail-consumed': (
      req?: IModels['POST/accounting/web/computemgr/detail-consumed']['Req'],
      extra?: commonLib.IExtra
    ) => {
      return rapperFetch({
        url: '/accounting/web/computemgr/detail-consumed',
        method: 'POST',
        params: req,
        extra,
      }) as Promise<IResponseTypes['POST/accounting/web/computemgr/detail-consumed']>
    },

    /**
     * 接口名：查询用户算力豆明细（获取）
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=477236&itf=2078635
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'POST/accounting/web/computemgr/detail-received': (
      req?: IModels['POST/accounting/web/computemgr/detail-received']['Req'],
      extra?: commonLib.IExtra
    ) => {
      return rapperFetch({
        url: '/accounting/web/computemgr/detail-received',
        method: 'POST',
        params: req,
        extra,
      }) as Promise<IResponseTypes['POST/accounting/web/computemgr/detail-received']>
    },

    /**
     * 接口名：查询用户算力豆概览
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=477236&itf=2078636
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/accounting/web/computemgr/summary': (
      req?: IModels['GET/accounting/web/computemgr/summary']['Req'],
      extra?: commonLib.IExtra
    ) => {
      return rapperFetch({
        url: '/accounting/web/computemgr/summary',
        method: 'GET',
        params: req,
        extra,
      }) as Promise<IResponseTypes['GET/accounting/web/computemgr/summary']>
    },

    /**
     * 接口名：考生入库并发送邮件
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=477510&itf=2087560
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'POST/examination/sendEmail': (req?: IModels['POST/examination/sendEmail']['Req'], extra?: commonLib.IExtra) => {
      return rapperFetch({
        url: '/examination/sendEmail',
        method: 'POST',
        params: req,
        extra,
      }) as Promise<IResponseTypes['POST/examination/sendEmail']>
    },

    /**
     * 接口名：导出考生信息到浏览器
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=477510&itf=2080110
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/examination/exportExamInfo': (
      req?: IModels['GET/examination/exportExamInfo']['Req'],
      extra?: commonLib.IExtra
    ) => {
      return rapperFetch({
        url: '/examination/exportExamInfo',
        method: 'GET',
        params: req,
        extra,
      }) as Promise<IResponseTypes['GET/examination/exportExamInfo']>
    },

    /**
     * 接口名：考试管理主页面
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=477510&itf=2080111
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'POST/examination/find/list': (req?: IModels['POST/examination/find/list']['Req'], extra?: commonLib.IExtra) => {
      return rapperFetch({
        url: '/examination/find/list',
        method: 'POST',
        params: req,
        extra,
      }) as Promise<IResponseTypes['POST/examination/find/list']>
    },

    /**
     * 接口名：查询考生考试链接
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=477510&itf=2080112
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'POST/examination/queryAddressInfo': (
      req?: IModels['POST/examination/queryAddressInfo']['Req'],
      extra?: commonLib.IExtra
    ) => {
      return rapperFetch({
        url: '/examination/queryAddressInfo',
        method: 'POST',
        params: req,
        extra,
      }) as Promise<IResponseTypes['POST/examination/queryAddressInfo']>
    },

    /**
     * 接口名：记录学生反馈记录1参加考试2不参加考试3待确定
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=477510&itf=2080113
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/examination/updateExamSta': (
      req?: IModels['GET/examination/updateExamSta']['Req'],
      extra?: commonLib.IExtra
    ) => {
      return rapperFetch({
        url: '/examination/updateExamSta',
        method: 'GET',
        params: req,
        extra,
      }) as Promise<IResponseTypes['GET/examination/updateExamSta']>
    },

    /**
     * 接口名：注销邀请码
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=477237&itf=2078637
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'POST/accounting/web/invitation/cancel-code': (
      req?: IModels['POST/accounting/web/invitation/cancel-code']['Req'],
      extra?: commonLib.IExtra
    ) => {
      return rapperFetch({
        url: '/accounting/web/invitation/cancel-code',
        method: 'POST',
        params: req,
        extra,
      }) as Promise<IResponseTypes['POST/accounting/web/invitation/cancel-code']>
    },

    /**
     * 接口名：创建邀请码
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=477237&itf=2078638
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'POST/accounting/web/invitation/create-code': (
      req?: IModels['POST/accounting/web/invitation/create-code']['Req'],
      extra?: commonLib.IExtra
    ) => {
      return rapperFetch({
        url: '/accounting/web/invitation/create-code',
        method: 'POST',
        params: req,
        extra,
      }) as Promise<IResponseTypes['POST/accounting/web/invitation/create-code']>
    },

    /**
     * 接口名：兑换邀请码
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=477237&itf=2078639
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'POST/accounting/web/invitation/exchange-code': (
      req?: IModels['POST/accounting/web/invitation/exchange-code']['Req'],
      extra?: commonLib.IExtra
    ) => {
      return rapperFetch({
        url: '/accounting/web/invitation/exchange-code',
        method: 'POST',
        params: req,
        extra,
      }) as Promise<IResponseTypes['POST/accounting/web/invitation/exchange-code']>
    },

    /**
     * 接口名：查询邀请码详情
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=477237&itf=2078640
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/accounting/web/invitation/query-code': (
      req?: IModels['GET/accounting/web/invitation/query-code']['Req'],
      extra?: commonLib.IExtra
    ) => {
      return rapperFetch({
        url: '/accounting/web/invitation/query-code',
        method: 'GET',
        params: req,
        extra,
      }) as Promise<IResponseTypes['GET/accounting/web/invitation/query-code']>
    },

    /**
     * 接口名：查询邀请码列表
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=477237&itf=2078641
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'POST/accounting/web/invitation/query-list': (
      req?: IModels['POST/accounting/web/invitation/query-list']['Req'],
      extra?: commonLib.IExtra
    ) => {
      return rapperFetch({
        url: '/accounting/web/invitation/query-list',
        method: 'POST',
        params: req,
        extra,
      }) as Promise<IResponseTypes['POST/accounting/web/invitation/query-list']>
    },

    /**
     * 接口名：查看邀请码领取详情
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=477237&itf=2078642
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'POST/accounting/web/invitation/query-received': (
      req?: IModels['POST/accounting/web/invitation/query-received']['Req'],
      extra?: commonLib.IExtra
    ) => {
      return rapperFetch({
        url: '/accounting/web/invitation/query-received',
        method: 'POST',
        params: req,
        extra,
      }) as Promise<IResponseTypes['POST/accounting/web/invitation/query-received']>
    },

    /**
     * 接口名：查询邀请码编辑记录
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=477237&itf=2078643
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'POST/accounting/web/invitation/query-update': (
      req?: IModels['POST/accounting/web/invitation/query-update']['Req'],
      extra?: commonLib.IExtra
    ) => {
      return rapperFetch({
        url: '/accounting/web/invitation/query-update',
        method: 'POST',
        params: req,
        extra,
      }) as Promise<IResponseTypes['POST/accounting/web/invitation/query-update']>
    },

    /**
     * 接口名：编辑邀请码
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=477237&itf=2078644
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'POST/accounting/web/invitation/update-code': (
      req?: IModels['POST/accounting/web/invitation/update-code']['Req'],
      extra?: commonLib.IExtra
    ) => {
      return rapperFetch({
        url: '/accounting/web/invitation/update-code',
        method: 'POST',
        params: req,
        extra,
      }) as Promise<IResponseTypes['POST/accounting/web/invitation/update-code']>
    },

    /**
     * 接口名：获取管理域的cpu,gpu,vgpu,运行实例资源使用情况
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=288321&mod=477623&itf=2080628
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/dp_platform/resource/manager/viewoverview/res_usage': (
      req?: IModels['GET/dp_platform/resource/manager/viewoverview/res_usage']['Req'],
      extra?: commonLib.IExtra
    ) => {
      return rapperFetch({
        url: '/dp_platform/resource/manager/viewoverview/res_usage',
        method: 'GET',
        params: req,
        extra,
      }) as Promise<IResponseTypes['GET/dp_platform/resource/manager/viewoverview/res_usage']>
    },
  }
}

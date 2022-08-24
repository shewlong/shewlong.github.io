<template>
  <el-button @click="documentTypes()">判断类型</el-button>
  <!-- <el-form :model="tableData" :rules="tableData.rules" ref="tableData">
    <el-table :data="tableData.data" style="width: 100%">
      <el-table-column prop="date" label="投资管理人" width="180">
      </el-table-column>
      <el-table-column label="投资比例" width="180">
        <template slot-scope="scope">
          <div>
            <el-form-item
              :rules="tableData.rules.name"
              :prop="'data.' + scope.$index + '.name'"
            >
              <el-input
                v-model="scope.row.name"
                size="small"
                placeholder="请输入投资比例"
              />
            </el-form-item>
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="address" label="*是否配平项">
        <template slot-scope="scope">
          <div>
            <el-form-item
              :rules="tableData.rules.address"
              :prop="'data.' + scope.$index + '.address'"
            >
              <el-select
                v-model="scope.row.address"
                placeholder="请选择活动区域"
              >
                <el-option label="全部" value=""></el-option>
                <el-option label="选项一" value="0"></el-option>
                <el-option label="选项二" value="1"></el-option>
              </el-select>
            </el-form-item>
          </div>
        </template>
      </el-table-column>
    </el-table>
    <el-button type="primary" @click="save"> 保存</el-button>
  </el-form> -->
</template>

<script>
import documentType from "@/utils/util";
export default {
  data() {
    const valiteName = (rule, value, callback) => {
      if (!value) {
        this.$message.error("请输入投资比例");
      } else {
        callback();
      }
    };
    const valiteAddress = (rule, value, callback) => {
      if (!value) {
        this.$message.error("请选择");
      } else {
        callback();
      }
    };
    return {
      // 附属条件表格
      tableData: {
        data: [
          {
            date: "2016-05-02",
            name: "王小虎",
            address: "0"
          },
          {
            date: "2016-05-04",
            name: "999",
            address: "1"
          }
        ],
        rules: {
          name: [
            {
              required: true,
              trigger: "change",
              validator: valiteName
            }
          ],
          address: [
            {
              required: true,
              trigger: "change",
              validator: valiteAddress
            }
          ]
        }
      }
    };
  },
  methods: {
    save() {
      this.$refs["tableData"].validate(valid => {
        if (valid) {
          // 业务逻辑操作代码...
        }
      });
    },
    documentTypes() {
      this.$util.documentType("a.word");
    }
  }
};
</script>

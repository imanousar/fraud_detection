import { useState } from "react";
import { Card, Typography, Form, Input,  Button, Divider } from "antd";
import { makeModelsPost } from "../api/api";

const { Title } = Typography;

const formValuesInitialState = {MOBILENO_AVL_FLAG: "",
AADHAR_FLAG: "",
PAN_FLAG: "",
VOTERID_FLAG: "",
DRIVING_FLAG: "",
PASSPORT_FLAG: "",
PERFORM_CNS_SCORE: "",
PRI_ACTIVE_ACCTS: "",
PRI_CURRENT_BALANCE: "",
PRI_DISBURSED_AMOUNT: "",
SEC_NO_OF_ACCTS: "",
SEC_OVERDUE_ACCTS: "",
SEC_CURRENT_BALANCE: "",
PRIMARY_INSTAL_AMT: "",
SEC_INSTAL_AMT: "",
DELINQUENT_ACCTS_IN_LAST_SIX_MONTHS: "",
CREDIT_HISTORY_LENGTH: "",
NO_OF_INQUIRIES: "",
DISBURSED_AMOUNT_new: "",
ASSET_COST_new: "",
LTV_new: "",
age: "",
disbursal_time: "",
EMPLOYMENT_TYPE_Salaried: "",
EMPLOYMENT_TYPE_Self_employed: "",
PERFORM_CNS_SCORE_DESCRIPTION_B_Very_Low_Risk: "",
PERFORM_CNS_SCORE_DESCRIPTION_C_Very_Low_Risk: "",
PERFORM_CNS_SCORE_DESCRIPTION_D_Very_Low_Risk: "",
PERFORM_CNS_SCORE_DESCRIPTION_E_Low_Risk: "",
PERFORM_CNS_SCORE_DESCRIPTION_F_Low_Risk: "",
PERFORM_CNS_SCORE_DESCRIPTION_G_Low_Risk: "",
PERFORM_CNS_SCORE_DESCRIPTION_H_Medium_Risk: "",
PERFORM_CNS_SCORE_DESCRIPTION_I_Medium_Risk: "",
PERFORM_CNS_SCORE_DESCRIPTION_J_High_Risk: "",
PERFORM_CNS_SCORE_DESCRIPTION_K_High_Risk: "",
PERFORM_CNS_SCORE_DESCRIPTION_L_Very_High_Risk: "",
PERFORM_CNS_SCORE_DESCRIPTION_M_Very_High_Risk: "",
PERFORM_CNS_SCORE_DESCRIPTION_No_Bureau_History_Available: "",
PERFORM_CNS_SCORE_DESCRIPTION_Not_Scored_More_than_50_active_Accounts_found: "",
PERFORM_CNS_SCORE_DESCRIPTION_Not_Scored_No_Activity_seen_on_the_customer_Inactive: "",
PERFORM_CNS_SCORE_DESCRIPTION_Not_Scored_No_Updates_available_in_last_36_months: "",
PERFORM_CNS_SCORE_DESCRIPTION_Not_Scored_Not_Enough_Info_available_on_the_customer: "",
PERFORM_CNS_SCORE_DESCRIPTION_Not_Scored_Only_a_Guarantor: "",
PERFORM_CNS_SCORE_DESCRIPTION_Not_Scored_Sufficient_History_Not_Available: ""};

const Models = () => {
  const [formValues, setFormValues] = useState(formValuesInitialState);
  const [models, setModels] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // console.log(name, value); // Uncomment to view name/value pair
    setFormValues({ ...formValues, [name]: value });
  };


  const resetForm = () => {
    setFormValues(formValuesInitialState);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    //console.log(formValues);

    // Post request
    makeModelsPost(formValues).then((responseData) => {
      setModels(responseData);
    });
  };

  return (
    <Card>
      <Title>Tool for  Fraud Detection</Title>
      <form>
      
        <Form.Item label="MOBILENO_AVL_FLAG">
          <Input
            type="number"
            min = "1"
            name="MOBILENO_AVL_FLAG"
            value={formValues.MOBILENO_AVL_FLAG}
            onChange={handleInputChange}
          />
        </Form.Item>

        <Form.Item label="AADHAR_FLAG">
          <Input
            type="number"
            min = "1"
            name="AADHAR_FLAG"
            value={formValues.AADHAR_FLAG}
            onChange={handleInputChange}
          />
        </Form.Item>     
        
        <Form.Item label="PAN_FLAG">
          <Input
            type="number"
            min = "1"
            name="PAN_FLAG"
            value={formValues.PAN_FLAG}
            onChange={handleInputChange}
          />
        </Form.Item>     
        
        <Form.Item label="VOTERID_FLAG">
          <Input
            type="number"
            min = "1"
            name="VOTERID_FLAG"
            value={formValues.VOTERID_FLAG}
            onChange={handleInputChange}
          />
        </Form.Item>     
        
        
        <Form.Item label="DRIVING_FLAG">
          <Input
            type="number"
            min = "1"
            name="DRIVING_FLAG"
            value={formValues.DRIVING_FLAG}
            onChange={handleInputChange}
          />
        </Form.Item>     
        
        <Form.Item label="PASSPORT_FLAG">
          <Input
            type="number"
            min = "1"
            name="PASSPORT_FLAG"
            value={formValues.PASSPORT_FLAG}
            onChange={handleInputChange}
          />
        </Form.Item>  
        
        <Form.Item label="PERFORM_CNS_SCORE">
          <Input
            type="number"
            min = "1"
            name="PERFORM_CNS_SCORE"
            value={formValues.PERFORM_CNS_SCORE}
            onChange={handleInputChange}
          />
        </Form.Item>    
        
        <Form.Item label="PRI_ACTIVE_ACCTS">
          <Input
            type="number"
            min = "1"
            name="PRI_ACTIVE_ACCTS"
            value={formValues.PRI_ACTIVE_ACCTS}
            onChange={handleInputChange}
          />
        </Form.Item>     
        
        <Form.Item label="PRI_CURRENT_BALANCE">
          <Input
            type="number"
            min = "1"
            name="PRI_CURRENT_BALANCE"
            value={formValues.PRI_CURRENT_BALANCE}
            onChange={handleInputChange}
          />
        </Form.Item>   
        
          <Form.Item label="PRI_DISBURSED_AMOUNT">
          <Input
            type="number"
            min = "1"
            name="PRI_DISBURSED_AMOUNT"
            value={formValues.PRI_DISBURSED_AMOUNT}
            onChange={handleInputChange}
          />
        </Form.Item>   
        
         <Form.Item label="SEC_NO_OF_ACCTS">
          <Input
            type="number"
            min = "1"
            name="SEC_NO_OF_ACCTS"
            value={formValues.SEC_NO_OF_ACCTS}
            onChange={handleInputChange}
          />
        </Form.Item>     
        
        <Form.Item label="SEC_OVERDUE_ACCTS">
          <Input
            type="number"
            min = "1"
            name="SEC_OVERDUE_ACCTS"
            value={formValues.SEC_OVERDUE_ACCTS}
            onChange={handleInputChange}
          />
        </Form.Item>    
        
        <Form.Item label="SEC_CURRENT_BALANCE">
          <Input
            type="number"
            min = "1"
            name="SEC_CURRENT_BALANCE"
            value={formValues.SEC_CURRENT_BALANCE}
            onChange={handleInputChange}
          />
        </Form.Item>     
        
        <Form.Item label="PRIMARY_INSTAL_AMT">
          <Input
            type="number"
            min = "1"
            name="PRIMARY_INSTAL_AMT"
            value={formValues.PRIMARY_INSTAL_AMT}
            onChange={handleInputChange}
          />
        </Form.Item>     
        
        <Form.Item label="SEC_INSTAL_AMT">
          <Input
            type="number"
            min = "1"
            name="SEC_INSTAL_AMT"
            value={formValues.SEC_INSTAL_AMT}
            onChange={handleInputChange}
          />
        </Form.Item> 
        
        <Form.Item label="DELINQUENT_ACCTS_IN_LAST_SIX_MONTHS">
          <Input
            type="number"
            min = "1"
            name="DELINQUENT_ACCTS_IN_LAST_SIX_MONTHS"
            value={formValues.DELINQUENT_ACCTS_IN_LAST_SIX_MONTHS}
            onChange={handleInputChange}
          />
        </Form.Item>
        
        <Form.Item label="CREDIT_HISTORY_LENGTH">
          <Input
            type="number"
            min = "1"
            name="CREDIT_HISTORY_LENGTH"
            value={formValues.CREDIT_HISTORY_LENGTH}
            onChange={handleInputChange}
          />
        </Form.Item>     
        
        <Form.Item label="NO_OF_INQUIRIES">
          <Input
            type="number"
            min = "1"
            name="NO_OF_INQUIRIES"
            value={formValues.NO_OF_INQUIRIES}
            onChange={handleInputChange}
          />
        </Form.Item>    
        
         <Form.Item label="DISBURSED_AMOUNT_new">
          <Input
            type="number"
            min = "1"
            name="DISBURSED_AMOUNT_new"
            value={formValues.DISBURSED_AMOUNT_new}
            onChange={handleInputChange}
          />
        </Form.Item>    
         <Form.Item label="ASSET_COST_new">
          <Input
            type="number"
            min = "1"
            name="ASSET_COST_new"
            value={formValues.ASSET_COST_new}
            onChange={handleInputChange}
          />
        </Form.Item>    
        
         <Form.Item label="LTV_new">
          <Input
            type="number"
            min = "1"
            name="LTV_new"
            value={formValues.LTV_new}
            onChange={handleInputChange}
          />
        </Form.Item>     
        
        <Form.Item label="age">
          <Input
            type="number"
            min = "1"
            name="age"
            value={formValues.age}
            onChange={handleInputChange}
          />
        </Form.Item>     
        
        <Form.Item label="disbursal_time">
          <Input
            type="number"
            min = "1"
            name="disbursal_time"
            value={formValues.disbursal_time}
            onChange={handleInputChange}
          />
        </Form.Item>     
        
        <Form.Item label="EMPLOYMENT_TYPE_Salaried">
          <Input
            type="number"
            min = "1"
            name="EMPLOYMENT_TYPE_Salaried"
            value={formValues.EMPLOYMENT_TYPE_Salaried}
            onChange={handleInputChange}
          />
        </Form.Item>     
        
        <Form.Item label="EMPLOYMENT_TYPE_Self_employed">
          <Input
            type="number"
            min = "1"
            name="EMPLOYMENT_TYPE_Self_employed"
            value={formValues.EMPLOYMENT_TYPE_Self_employed}
            onChange={handleInputChange}
          />
        </Form.Item>     
        
        <Form.Item label="PERFORM_CNS_SCORE_DESCRIPTION_B_Very_Low_Risk">
          <Input
            type="number"
            min = "1"
            name="PERFORM_CNS_SCORE_DESCRIPTION_B_Very_Low_Risk"
            value={formValues.PERFORM_CNS_SCORE_DESCRIPTION_B_Very_Low_Risk}
            onChange={handleInputChange}
          />
        </Form.Item>     
        
        <Form.Item label="PERFORM_CNS_SCORE_DESCRIPTION_C_Very_Low_Risk">
          <Input
            type="number"
            min = "1"
            name="PERFORM_CNS_SCORE_DESCRIPTION_C_Very_Low_Risk"
            value={formValues.PERFORM_CNS_SCORE_DESCRIPTION_C_Very_Low_Risk}
            onChange={handleInputChange}
          />
        </Form.Item>   
        
        <Form.Item label="PERFORM_CNS_SCORE_DESCRIPTION_D_Very_Low_Risk">
          <Input
            type="number"
            min = "1"
            name="PERFORM_CNS_SCORE_DESCRIPTION_D_Very_Low_Risk"
            value={formValues.PERFORM_CNS_SCORE_DESCRIPTION_D_Very_Low_Risk}
            onChange={handleInputChange}
          />
        </Form.Item>     
        
        <Form.Item label="PERFORM_CNS_SCORE_DESCRIPTION_E_Low_Risk">
          <Input
            type="number"
            min = "1"
            name="PERFORM_CNS_SCORE_DESCRIPTION_E_Low_Risk"
            value={formValues.PERFORM_CNS_SCORE_DESCRIPTION_E_Low_Risk}
            onChange={handleInputChange}
          />
        </Form.Item>  
        
        <Form.Item label="PERFORM_CNS_SCORE_DESCRIPTION_F_Low_Risk">
          <Input
            type="number"
            min = "1"
            name="PERFORM_CNS_SCORE_DESCRIPTION_F_Low_Risk"
            value={formValues.PERFORM_CNS_SCORE_DESCRIPTION_F_Low_Risk}
            onChange={handleInputChange}
          />
        </Form.Item>     
        
        <Form.Item label="PERFORM_CNS_SCORE_DESCRIPTION_G_Low_Risk">
          <Input
            type="number"
            min = "1"
            name="PERFORM_CNS_SCORE_DESCRIPTION_G_Low_Risk"
            value={formValues.PERFORM_CNS_SCORE_DESCRIPTION_G_Low_Risk}
            onChange={handleInputChange}
          />
        </Form.Item>     
        
        
        <Form.Item label="PERFORM_CNS_SCORE_DESCRIPTION_H_Medium_Risk">
          <Input
            type="number"
            min = "1"
            name="PERFORM_CNS_SCORE_DESCRIPTION_H_Medium_Risk"
            value={formValues.PERFORM_CNS_SCORE_DESCRIPTION_H_Medium_Risk}
            onChange={handleInputChange}
          />
        </Form.Item>    
        
         <Form.Item label="PERFORM_CNS_SCORE_DESCRIPTION_I_Medium_Risk">
          <Input
            type="number"
            min = "1"
            name="PERFORM_CNS_SCORE_DESCRIPTION_I_Medium_Risk"
            value={formValues.PERFORM_CNS_SCORE_DESCRIPTION_I_Medium_Risk}
            onChange={handleInputChange}
          />
        </Form.Item>     
        
        <Form.Item label="PERFORM_CNS_SCORE_DESCRIPTION_J_High_Risk">
          <Input
            type="number"
            min = "1"
            name="PERFORM_CNS_SCORE_DESCRIPTION_J_High_Risk"
            value={formValues.PERFORM_CNS_SCORE_DESCRIPTION_J_High_Risk}
            onChange={handleInputChange}
          />
        </Form.Item>     
        
        <Form.Item label="PERFORM_CNS_SCORE_DESCRIPTION_K_High_Risk">
          <Input
            type="number"
            min = "1"
            name="PERFORM_CNS_SCORE_DESCRIPTION_K_High_Risk"
            value={formValues.PERFORM_CNS_SCORE_DESCRIPTION_K_High_Risk}
            onChange={handleInputChange}
          />
        </Form.Item>    
        
        <Form.Item label="PERFORM_CNS_SCORE_DESCRIPTION_L_Very_High_Risk">
          <Input
            type="number"
            min = "1"
            name="PERFORM_CNS_SCORE_DESCRIPTION_L_Very_High_Risk"
            value={formValues.PERFORM_CNS_SCORE_DESCRIPTION_L_Very_High_Risk}
            onChange={handleInputChange}
          />
        </Form.Item>     
        
        <Form.Item label="PERFORM_CNS_SCORE_DESCRIPTION_M_Very_High_Risk">
          <Input
            type="number"
            min = "1"
            name="PERFORM_CNS_SCORE_DESCRIPTION_M_Very_High_Risk"
            value={formValues.PERFORM_CNS_SCORE_DESCRIPTION_M_Very_High_Risk}
            onChange={handleInputChange}
          />
        </Form.Item>     
        <Form.Item label="PERFORM_CNS_SCORE_DESCRIPTION_No_Bureau_History_Available">
          <Input
            type="number"
            min = "1"
            name="PERFORM_CNS_SCORE_DESCRIPTION_No_Bureau_History_Available"
            value={formValues.PERFORM_CNS_SCORE_DESCRIPTION_No_Bureau_History_Available}
            onChange={handleInputChange}
          />
        </Form.Item>    
        
        <Form.Item label="PERFORM_CNS_SCORE_DESCRIPTION_Not_Scored_More_than_50_active_Accounts_found">
          <Input
            type="number"
            min = "1"
            name="PERFORM_CNS_SCORE_DESCRIPTION_Not_Scored_More_than_50_active_Accounts_found"
            value={formValues.PERFORM_CNS_SCORE_DESCRIPTION_Not_Scored_More_than_50_active_Accounts_found}
            onChange={handleInputChange}
          />
        </Form.Item>     
        
        <Form.Item label="PERFORM_CNS_SCORE_DESCRIPTION_Not_Scored_No_Activity_seen_on_the_customer_Inactive">
          <Input
            type="number"
            min = "1"
            name="PERFORM_CNS_SCORE_DESCRIPTION_Not_Scored_No_Activity_seen_on_the_customer_Inactive"
            value={formValues.PERFORM_CNS_SCORE_DESCRIPTION_Not_Scored_No_Activity_seen_on_the_customer_Inactive}
            onChange={handleInputChange}
          />
        </Form.Item>     
        
        <Form.Item label="PERFORM_CNS_SCORE_DESCRIPTION_Not_Scored_No_Updates_available_in_last_36_months">
          <Input
            type="number"
            min = "1"
            name="PERFORM_CNS_SCORE_DESCRIPTION_Not_Scored_No_Updates_available_in_last_36_months"
            value={formValues.PERFORM_CNS_SCORE_DESCRIPTION_Not_Scored_No_Updates_available_in_last_36_months}
            onChange={handleInputChange}
          />
        </Form.Item>     
        
        <Form.Item label="PERFORM_CNS_SCORE_DESCRIPTION_Not_Scored_Not_Enough_Info_available_on_the_customer">
          <Input
            type="number"
            min = "1"
            name="PERFORM_CNS_SCORE_DESCRIPTION_Not_Scored_Not_Enough_Info_available_on_the_customer"
            value={formValues.PERFORM_CNS_SCORE_DESCRIPTION_Not_Scored_Not_Enough_Info_available_on_the_customer}
            onChange={handleInputChange}
          />
        </Form.Item>     
        
        <Form.Item label="PERFORM_CNS_SCORE_DESCRIPTION_Not_Scored_Only_a_Guarantor">
          <Input
            type="number"
            min = "1"
            name="PERFORM_CNS_SCORE_DESCRIPTION_Not_Scored_Only_a_Guarantor"
            value={formValues.PERFORM_CNS_SCORE_DESCRIPTION_Not_Scored_Only_a_Guarantor}
            onChange={handleInputChange}
          />
        </Form.Item>
             <Form.Item label="PERFORM_CNS_SCORE_DESCRIPTION_Not_Scored_Sufficient_History_Not_Available">
          <Input
            type="number"
            min = "1"
            name="PERFORM_CNS_SCORE_DESCRIPTION_Not_Scored_Sufficient_History_Not_Available"
            value={formValues.PERFORM_CNS_SCORE_DESCRIPTION_Not_Scored_Sufficient_History_Not_Available}
            onChange={handleInputChange}
          />
        </Form.Item>
        <Form.Item>
          <Button type="secondary" onClick={resetForm}>
            Reset
          </Button>
          &nbsp;
          <Button type="primary" onClick={handleFormSubmit}>
            Submit
          </Button>
        </Form.Item>
      </form>

      <Divider />

      {models && (
        <div>
          <Title level={3}>Price Prediction</Title>
          {JSON.stringify(models)}
        </div>
      )}
    </Card>
  );
};

export default Models;

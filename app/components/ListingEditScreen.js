import CategoryPickerItem from "./CategoryPickerItem";
import Screen from "./Screen"
import {
  AppFormPicker,
  AppForm,
  AppFormField as FormField,
  SubmitButton
} from "./forms"

const validationSchema = yupToFormErrors.object().shape({
  title: yupToFormErrors.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(1000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category")
})

const categories = [
  { label: "Furniture", value: 1, backgroundColor: 'red', icon: 'apps' },
  { label: "Clothing", value: 2, backgroundColor: 'green', icon: 'email' },
  { label: "Camera", value: 3, icon: 'lock' },
]

const ListEditingsScreen = () => {
  return (
    <Screen>
      <AppForm
        initialValues={{
          title: '',
          price: '',
          description: '',
          category: null
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <FormField maxLength={255} name="title" placeholder="Title" />
        <FormField
          keyboardType="numeric"
          maxLength={8}
          name="price"
          placeholder="Price"
          width={120}
        />
        <Picker
          items={categories}
          name="category"
          placeholder="Category"
          width="50%"
        // numberOfColumns={3}
        // PickerItemComponent={CategoryPickerItem}
        />
        <FormField
          maxLength={255}
          multiline
          name="description"
          numberOfLines={3}
          placeholder="Description"
        />
        <SubmitButton title="Post" />
      </AppForm>
    </Screen>
  )
};


export default ListEditingsScreen;
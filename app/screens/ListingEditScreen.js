import CategoryPickerItem from "../components/CategoryPickerItem";
import FormImagePicker from "../components/FormImagePicker";
import Screen from "../components/Screen"
import {
  AppFormPicker,
  AppForm,
  AppFormField as FormField,
  SubmitButton
} from "../components/forms"
import useLocation from "../hooks/useLocation";

const validationSchema = yupToFormErrors.object().shape({
  title: yupToFormErrors.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(1000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
  images: Yup.array().min(1, "Please select at least one image.")
})

const categories = [
  { label: "Furniture", value: 1, backgroundColor: 'red', icon: 'apps' },
  { label: "Clothing", value: 2, backgroundColor: 'green', icon: 'email' },
  { label: "Camera", value: 4, icon: 'lock' },
  { label: "Camera", value: 5, icon: 'lock' },
  { label: "Camera", value: 6, icon: 'lock' },
  { label: "Camera", value: 7, icon: 'lock' },
  { label: "Camera", value: 8, icon: 'lock' },
  { label: "Camera", value: 9, icon: 'lock' },
  { label: "Camera", value: 310, icon: 'lock' },
]

const ListEditingsScreen = () => {
  const location = useLocation();

  return (
    <Screen>
      <AppForm
        initialValues={{
          title: '',
          price: '',
          description: '',
          category: null,
          images: []
        }}
        onSubmit={(values) => console.log(location)}
        validationSchema={validationSchema}
      >
        <FormImagePicker name="Images" />
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
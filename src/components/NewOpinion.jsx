import { useActionState } from "react";
import { OpinionsContext } from "../store/opinions-context";
import { use } from "react";
import SubmitButton from "./SubmitButton";

export function NewOpinion() {

  const {addOpinion} = use(OpinionsContext)
  
  async function addNewOpinionAction(prevState, formData) {
    const userName = formData.get("userName");
    const title = formData.get("title");
    const body = formData.get("body");

    let errors = {
      userNameError: null,
      titleError: null,
      bodyError : null
    };

    if (userName.trim().length < 3) {
      errors.userNameError = "you must put a name with 3 chars";
    }

    if (title.trim().length < 5) {
      errors.titleError = "you must put a title with 5 chars";
    }

    if (body.trim().length < 10) {
      errors.bodyError = "you must put a body with 10 chars";
    }

    if (errors.userNameError || errors.titleError || errors.bodyError) {
      return {
        errors,
        savedValues: {
          userName,
          title,
          body,
        },
      };
    }
    await addOpinion({title,body,userName})
    return { errors: null };
  }

  const [formState, formAction] = useActionState(addNewOpinionAction, {
    errors: null,
  });

  return (
    <div id="new-opinion">
      <h2>Share your opinion!</h2>
      <form action={formAction}>
        <div className="control-row">
          <div className="control">
            <label htmlFor="userName">Your Name</label>
            <input
              type="text"
              id="userName"
              name="userName"
              defaultValue={formState.savedValues?.userName}
            />
            { formState.errors?.userNameError && <p className="errors">{ formState.errors.userNameError }</p>}
          </div>

          <div className="control">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              defaultValue={formState.savedValues?.title}
            />
            { formState.errors?.titleError && <p className="errors">{ formState.errors.titleError }</p>}
          </div>
        </div>
        <div className="control">
          <label htmlFor="body">Your Opinion</label>
          <textarea
            id="body"
            name="body"
            rows={5}
            defaultValue={formState.savedValues?.body}
          ></textarea>
          { formState.errors?.bodyError && <p className="errors">{ formState.errors.bodyError }</p>}
        </div>

        <SubmitButton />
      </form>
    </div>
  );
}
